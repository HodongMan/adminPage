'use strict';
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {

    const cadmin_user = sequelize.define('cadmin_user', {

        email : {
            type : DataTypes.STRING,
            allowNull : false,
            primaryKey : true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        salt : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    }, {
        classMethods: {
            associate: (models) => {
                cadmin_user.hasMany(models.cadmin_ad, {
                    foreignKey : 'user_email',
                    as : 'cadmin_ads',
                });

                cadmin_user.hasOne(models.cadmin_ad, {
                    foreignKey : 'user_email',
                    as : 'cadmin_user_details',
                })
            },
        },
        instanceMethods: {
            /*
                Inner Method
                makeSalt : 비밀번호 키 값 생성
                encryptPassword : 비밀번호 해시 값 생성
                authenticate : 비밀번호 인증

            */

            makeSalt(byteSize, callback) {

                const defaultByteSize = 16;
                if (typeof arguments[0] === 'function') {
                    callback = arguments[0];
                    byteSize = defaultByteSize;
                } else if (typeof arguments[1] === 'function') {
                    callback = arguments[1];
                }

                if (!byteSize) {
                    byteSize = defaultByteSize;
                }

                if (!callback) {
                    return crypto.randomBytes(byteSize).toString('base64');
                }
                return crypto.randomBytes(byteSize, (err, salt) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, salt.toString('base64'));
                    }
                });
            },

            encryptPassword(password, callback) {

                if (!password || !this.salt) {
                    if (!callback) {
                        return null;
                    } else {
                        return callback('Missing password or salt');
                    }
                }

                const defaultIterations = 10000;
                const defaultKeyLength = 64;
                const salt = new Buffer(this.salt, 'base64');

                if (!callback) {
                    return crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength)
                    .toString('base64');
                }

                return crypto.pbkdf2(password, salt, defaultIterations, defaultKeyLength, (err, key) => {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, key.toString('base64'));
                    }
                });
            },
            authenticate(password, callback) {

                if (!callback) {
                    return this.password === this.encryptPassword(password);
                }

                this.encryptPassword(password, (err, pwdGen) => {
                    if (err) {
                        return callback(err);
                    }

                    if (this.password === pwdGen) {
                        callback(null, true);
                    } else {
                        callback(null, false);
                    }
                });
            },
        },
        hooks : {
            beforeCreate : (member, options, fn) => {

                member.makeSalt((saltErr, salt) => {

                    if(saltErr){
                        return fn(saltErr);
                    }
                    member.salt = salt;
                    member.encryptPassword(member.password, (encryptErr, hashedPassword) => {
                        if(encryptErr){
                            return fn(encryptErr);
                        }
                        member.password = hashedPassword;
                        fn();
                    });
                });
            },
        },

    });

    return cadmin_user;
};
