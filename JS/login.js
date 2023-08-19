let inputs = document.getElementsByTagName("input");
let click = document.getElementsByTagName("button");
let error1 = document.getElementsByClassName("error1");
let error_notif = document.getElementsByClassName("error");
window.addEventListener("load",() => {
    inputs[0].focus();
})
click[0].onclick = function() {
    if (inputs[0].value.length <= 6){
        error_notif[0].textContent = "you must write more than 6 characters"
    }else{
        error_notif[0].textContent = ""
    }
    if (isNaN(inputs[0].value.charAt(0)) === false){
        error_notif[1].textContent = "first characters musn't be number"
    }else{
        error_notif[1].textContent = ""
    }
    if(inputs[1].value.length <= 8){
        error_notif[3].innerHTML = "you must write more than 8 characters"
    }else{
        error_notif[3].innerHTML = ""
    }
    if (error_notif[0].textContent === "" && error_notif[1].textContent === "" && error_notif[3].innerHTML === ""){
        location.href = "file:///C:/Users/gad/Desktop/wep/Projects/login_page/the_website.html"  
    }
}
// eye part
let eye_show = document.getElementById("showen");
let eye_hiddin = document.getElementById("hiddin");
eye_hiddin.onclick = function(){
    eye_hiddin.style = "visibility: hidden;"
    eye_show.style = "visibility: visible;"
    inputs[1].setAttribute("type","text")
}
eye_show.onclick = function(){
    eye_hiddin.style = "visibility: visible;"
    eye_show.style = "visibility: hidden;"
    inputs[1].setAttribute("type","password")
}