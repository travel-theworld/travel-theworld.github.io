/*Used for open and close navbar*/
const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

/*Used for navbar color*/
const colors = ["#6495ed", "#ffa07a", "#7fffd4", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

/*Used for card front and back side*/
Array.from(document.querySelectorAll(".button-navigation")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});




/*
function submit_contact() { 
  var x; 
  if (confirm("Thank you for contacting us") == true) { 
      x = "OK pressed!"; 
  }  
  document.getElementById("form-btn").innerHTML = x; 
}  

*/

function submit_contact(){
  event.preventDefault();
  swal({
    title: 'Thank you for contacting us',
    text: 'We will get back to you as soon as possible',
    type: 'success',
});
}

/*
document.getElementById('form-btn').onclick = function(event){
	event.preventDefault();
	swal("Thank you for contacting us", "We will get back to you as soon as possible", "success");
};
*/