import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const login = () => {
    return(
        <div>
            <div className='wrap'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <div className='title'><img src='./' alt='cashcall' /></div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <form className='form-horizontal'>
                            <div className='col-sm-12 col-md-12 m10'>
                                <input type='text' placeholder='Email' className='login_input'/>
                            </div>

                            <div className='col-sm-12 col-md-12 m10'>
                                <input type='password' placeholder='Password' className='login_input'/>
                            </div>

                            <div className="col-sm-12 col-md-12">
					            <a href="#" className="login_action btn btn-default">로그인</a>
				            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='wrap_filter'></div>
            <div className='wrap_bg'></div>
        </div>
    );
};

export default login;
