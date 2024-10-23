

//get  name
var h1_elements = document.getElementsByTagName("h1");//select element use tag name
var first_item = h1_elements[1];
console.log(first_item.innerText);
console.log(first_item.innerHTML);

first_item.innerText="Hi I'M JavaScript!";
first_item.innerHTML="<U>HELLO</U>";

//id
var id_elements = document.getElementById("Hi");
console.log(id_elements);

//class name
var first_class = document.getElementsByClassName("myClass");
var first_class_element=first_class[0];
console.log(first_class_element.innerText);
console.log(first_class_element.innerHTML);
first_class_element.innerText="JavaScript!";
first_class_element.innerHTML="ABCD <b>abcd</b>";

//query selector
var query_selected_element = document.querySelector("h6>p");
console.log(query_selected_element);

//all query
var query = document.querySelectorAll("p");
console.log(query);