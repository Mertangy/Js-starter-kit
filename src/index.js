import './index.css'

import {getUsers} from './api/userApi.js'

getUsers().then(result =>{
    let userBody ="";

    result.forEach(user =>{
        userBody+=`
        <li> ${user.id}</li>
        <li> ${user.firstName}</li>
        <li> ${user.lastName}</li>
        <li> ${user.email}</li>`
       
    });

    global.document.getElementById('users').innerHTML=userBody;
});