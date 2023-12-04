var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-mode")
}
if(localStorage.getItem("Mode") == "light"){
    localStorage.setItem("Mode", "dark")
}
else{
    localStorage.setItem("Mode", "light")
}
if(localStorage.getItem("Mode") == "light"){
darkBtn.classList.remove("dark-btn-on");
document.body.classList.remove("dark-mode");
}
else if(localStorage.getItem("Mode") == "dark"){
darkBtn.classList.add("dark-btn-on");
document.body.classList.add("dark-mode");
}
else{
localStorage.setItem("Mode", "light")
}

localStorage.setItem("Mode", "dark");
localStorage.getItem("Mode", );