import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

let localObj = {
	email: "",
	message: "",
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(addLocalStorage, 500));

populateTextarea();

function onFormSubmit(e){
	e.preventDefault();
	localStorage.removeItem("feedback-form-state");
	e.target.reset();
	console.log(localObj);
}

function addLocalStorage(e){
	localObj[e.target.name] = e.target.value
	localStorage.setItem(("feedback-form-state"), JSON.stringify(localObj));
}

function populateTextarea(e){
	try {
		localObj = JSON.parse(localStorage.getItem("feedback-form-state"));
		if(localObj === null){
			return;
		}
		  for (const key in localObj) {
			form[key].value = localObj[key]
		  }
	}
	catch {
		alert("Error"); 
	}
} 