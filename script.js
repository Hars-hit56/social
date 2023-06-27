var settingmenu = document.querySelector(".setting-menu");
// var darkBtn = document.getElementById(".dark-btn");
function settingMenutoggle(){
     settingmenu.classList.toggle("settings-menu-height");
}
// darkBtn.onclick() = function(){
//      darkBtn.classList.toggle= ("dark-btn-on");
// }
let toggle =document.querySelector(".toggle")
function Animated(){
    toggle.classList.toggle("activate");
    document.body.classList.toggle("dark-theme");
}
