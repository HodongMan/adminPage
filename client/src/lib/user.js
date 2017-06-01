import axios from 'axios';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';


/*
    @params user->email : String,
            user->password : String,
    @returns token
*/
export function login(user){

    axios.post("http://localhost:3000/api/user/login", user)
    .then((response) => {return response.token})
    .catch((response) => {return response.error});
}


/*
    @params user->email : String,
            user->name : String,
            user->password : String,

            @returns token
*/
export function register(user){

    axios.post("http://localhost:3000/api/user", user)
    .then((response) => {return response.token})
    .catch((response) => {return response.error});
}

/*
    @params token : String,
*/

export function setCookie(token){
    cookies.set('token', token, { path: '/' });
}
/*
    @returns token : String,
*/
export function getCookie(){
    return cookies.get('token');
}
