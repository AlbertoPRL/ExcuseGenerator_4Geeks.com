import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert'
import { Tooltip, Toast, Popover } from 'bootstrap'

window.onload = function (){
    document.querySelector("button").addEventListener("click", excuseGenerator, false);
}

const excuseGenerator = () => {
    const who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    const action = ['ate', 'peed', 'crushed', 'broke'];
    const what = ['my homework', 'the keys', 'the car'];
    const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    document.querySelector("#excuse").innerHTML = `${who[randomIndex(who)]} 
        ${action[randomIndex(action)]}
        ${what[randomIndex(what)]}
        ${when[randomIndex(when)]}`;
}

const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}