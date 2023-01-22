import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const localObj = {
	email: "",
	message: "",
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(addLocalStorage, 500));
populateTextarea();

function onFormSubmit(e){
	e.preventDefault();
	e.target.reset();
	console.log(localStorage.getItem('feedback-form-state'));
	localStorage.removeItem("feedback-textarea");
}

function addLocalStorage(e){
	localObj[e.target.name] = e.target.value
	localStorage.setItem("feedback-form-state", JSON.stringify(localObj))
}

function populateTextarea(e){
	if(localStorage.getItem('feedback-form-state') === null){
		return;
	}
	const temp = JSON.parse(localStorage.getItem('feedback-form-state'));
	localObj.email = temp.email;
	localObj.message = temp.message;
	const savedMessage = localStorage.getItem('feedback-form-state');
	email.value = JSON.parse(savedMessage).email;
	message.value = JSON.parse(savedMessage).message;
}