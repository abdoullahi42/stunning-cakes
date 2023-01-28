
//mobile navigation
const openCloseBar = function(){
  document.querySelector(".close").classList.toggle("close-btn");
  document.querySelector(".items-nav").classList.toggle("hidden");
  document.querySelector(".open-bar").classList.toggle("hidden");
}
document.querySelector(".open-bar").addEventListener("click", openCloseBar);
document.querySelector(".close").addEventListener("click", openCloseBar);

// icons variable
const breadIcon = document.querySelector(".bread-icons");
const cokiesIcon = document.querySelector(".cookies-icons");
const cakesIcon = document.querySelector(".cakes-icons");

//menu variable
const breadMenu = document.querySelector(".bread");
const cookiesMenu = document.querySelector(".cookies");
const cakesMenu = document.querySelector(".cakes");

//bread-icon click
breadIcon.addEventListener("click", function () {
  console.log("gooclick");
  breadMenu.classList.remove("hidden"); // remove to works
  cookiesMenu.classList.add("hidden");
  cakesMenu.classList.add("hidden");
  breadIcon.style.backgroundColor = "#fff";
  cokiesIcon.style.backgroundColor = "#fff0f5";
  cakesIcon.style.backgroundColor = "#fff0f5";
});

//cookies-icon click
cokiesIcon.addEventListener("click", function () {
  console.log("i click++");
  cookiesMenu.classList.remove("cookies-sample-menu");
  cookiesMenu.classList.remove("hidden");
  breadMenu.classList.add("hidden"); //.add to works
  cakesMenu.classList.add("hidden");
  breadIcon.style.backgroundColor = "#fff0f5";
  cakesIcon.style.backgroundColor = "#fff0f5";
  cokiesIcon.style.backgroundColor = "#fff";
  //   bakesMenu.classList.add("bread-sample");
  //   bakesMenu.classList.add("cakes-menu-sample");
});

//cake-icon click
cakesIcon.addEventListener("click", function () {
  console.log("cakesworkks");
  cakesMenu.classList.remove("cakes-menu-sample");
  cakesMenu.classList.remove("hidden");
  breadMenu.classList.add("hidden");
  cookiesMenu.classList.add("hidden");
  cakesIcon.style.backgroundColor = "#fff";
  cokiesIcon.style.backgroundColor = "#fff0f5";
  breadIcon.style.backgroundColor = "#fff0f5";
});

/frequently ask question
//firstQuestion
let firstQuestion = function () {
  document.querySelector(".response1").classList.toggle("hidden");
  document.querySelector(".icon-faqs").classList.toggle("hidden");
  document.querySelector(".respnse-icon").classList.toggle("hidden");
};

document.querySelector(".icon-faqs").addEventListener("click", firstQuestion)
document.querySelector(".respnse-icon").addEventListener("click", firstQuestion)

//second question
let secondQuestion =  function(){
     document.querySelector(".response2").classList.toggle("hidden");
     document.querySelector(".ficon-faqs").classList.toggle("hidden");
     document.querySelector(".second-respnse-icon").classList.toggle("hidden");
}
document.querySelector(".ficon-faqs").addEventListener('click',secondQuestion )
document.querySelector(".second-respnse-icon").addEventListener('click',secondQuestion)

//third question
let thirdQuestion = function(){
     document.querySelector(".response3").classList.toggle("hidden");
     document.querySelector(".sicon-faqs").classList.toggle("hidden");
     document.querySelector(".third-respnse-icon").classList.toggle("hidden");
}
document.querySelector(".sicon-faqs").addEventListener("click",thirdQuestion);
document .querySelector(".third-respnse-icon").addEventListener("click", thirdQuestion);

//fourthquestion
let fourthQuestion = function () {
  document.querySelector(".response4").classList.toggle("hidden");
  document.querySelector(".ticon-faqs").classList.toggle("hidden");
  document.querySelector(".fourth-respnse-icon").classList.toggle("hidden");
};
document.querySelector(".ticon-faqs").addEventListener("click", fourthQuestion);
document.querySelector(".fourth-respnse-icon").addEventListener("click",fourthQuestion);
