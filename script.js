//Makes the content in the page go to the side when i open that sidebar W3s
function openSidebar() {
  document.querySelector(".wrapper").style.marginLeft="200px";
  document.querySelector(".navBar").style.display="block";
  document.querySelector("#openNav").style.display="none"
}
function closeSidebar(){
  document.querySelector(".wrapper").style.marginLeft="0";
  document.querySelector(".navBar").style.display="none";
  document.querySelector("#openNav").style.display="inline-block";
}

//Source: MDN
//Goes to the bottom of the contact page
const element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" 
});

