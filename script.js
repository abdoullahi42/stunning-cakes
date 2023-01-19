
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

//faqs
const response = document.querySelector(".faqs-response");
const questionOne = document.querySelector('.quest1');
const questionTwo = document.querySelector(".quest2");
const questionThree = document.querySelector(".quest3");
const questionFour = document.querySelector(".quest4");

questionOne.addEventListener('click', function(){
response.classList.remove('response1')
})

document.querySelector('.close1').addEventListener('click', function(){
  response.classList.toggle('response1') //add hidden class
})
