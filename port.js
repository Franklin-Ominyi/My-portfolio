var toggle = document.querySelector("#toggle");
var toggleMenu = document.querySelector("#nav");

toggleMenu.style.display = "none";
const toggleMenuFunction=()=>{
 var brand = document.querySelector("#brand");
 var name = document.querySelector("#name");
 if(toggleMenu.style.display == "none"){
  toggleMenu.style.display = "inline"
  name.style.display = "none";
  brand.style.backgroundColor = "green";
  toggle.innerHTML = "&#10006";
  toggle.style.color = "red";
 }
 else{
  toggleMenu.style.display = "none"
  name.style.display = "block";
  brand.style.backgroundColor = "black";
  toggle.innerHTML = "&#9776";
  toggle.style.color = "white";
 }
}

toggle.addEventListener('click', toggleMenuFunction);



// adding the present navbar some css styling
const navStyleOnclick1 =()=>{
 var link1 = document.getElementById("link1");
 var link2 = document.getElementById("link2");
 var link3 = document.getElementById("link3");
 var link4 = document.getElementById("link4");
 link1.className = "active";
 link3.className = "none";
 link4.className = "none";
 link2.className = "none";
}

const navStyleOnclick2 =()=>{
 var link1 = document.getElementById("link1");
 var link2 = document.getElementById("link2");
 var link3 = document.getElementById("link3");
 var link4 = document.getElementById("link4");
 link1.className = "none";
 link3.className = "none";
 link4.className = "none";
 link2.className = "active";
}

const navStyleOnclick3 =()=>{
 var link1 = document.getElementById("link1");
 var link2 = document.getElementById("link2");
 var link3 = document.getElementById("link3");
 var link4 = document.getElementById("link4");
 link1.className = "none";
 link3.className = "active";
 link4.className = "none";
 link2.className = "none";
}


const navStyleOnclick4 =()=>{
 var link1 = document.getElementById("link1");
 var link2 = document.getElementById("link2");
 var link3 = document.getElementById("link3");
 var link4 = document.getElementById("link4");
 link1.className = "none";
 link3.className = "none";
 link4.className = "active";
 link2.className = "none";
}





// image slider

var i = 0
var pix = [];
var time = 3000;
pix[0] = "maxresdefault.jpg";
pix[1] = "apple-desk-imac-39284.jpg";
pix[2] = "computer class.jpg";

const imgSlider=()=>{
document.querySelector("#sliders").src = pix[i];
if(i<pix.length-1){
 i++
}else{
 i = 0;
}


setTimeout("imgSlider()", time);
}
window.onload = imgSlider;





// var nav = document.querySelector('#nav');
// var header = document.querySelector("#header");
// var menu = document.querySelector("#menu");
// var msg = document.querySelector("#msg");

// links.style.display = "none";

// const myFunction=()=>{
//  if(nav.style.display == "none"){
//   nav.style.display = "inline-block";
//   header.style.backgroundColor = "red";
//   menu.innerHTML = "&#10006";
//   msg.style.display = "none";
//  }
//  else{
//   nav.style.display = "none";
//   header.style.backgroundColor = "black"
//   menu.innerHTML = "&#9776";
//   msg.style.display = "block";
//  }
// }

