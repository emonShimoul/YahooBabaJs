var element;

// element = document.body;
// element = document.baseURI;
// element = document.URL;
// element = document.domain;
// element = document.images;


// element = document.getElementById("header");
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[0];
// element = document.getElementsByTagName("ul");
// element = document.getElementsByTagName("ul")[2];

element = document.getElementById("header").innerText;
element = document.getElementById("content").innerText;
element = document.getElementById("content").innerHTML;
element = document.getElementById("header").getAttribute("class");
element = document.getElementById("header").getAttributeNode("style");
element = document.getElementById("header").attributes;
element = document.getElementById("header").attributes[2];
element = document.getElementById("header").attributes[2].value;
element = document.getElementById("header").attributes[2].name;




console.log(element);