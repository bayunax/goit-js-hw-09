const formFeedback = document.querySelector(".feedback-form");


const formSave = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
formFeedback.email.value = formSave.email || "";
formFeedback.message.value = formSave.message || "";


formFeedback.addEventListener("input", event => {
  const formData = {
    email: formFeedback.email.value.trim(),
    message: formFeedback.message.value.trim()
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});


formFeedback.addEventListener("submit", event => {
  event.preventDefault();


  if (formFeedback.email.value.trim() && formFeedback.message.value.trim()) {
   
    console.log({
      email: formFeedback.email.value.trim(),
      message: formFeedback.message.value.trim()
    });

  
    formFeedback.reset();
    localStorage.removeItem("feedback-form-state");
  } else {

    alert("Будь ласка, заповніть обидва поля.");
  }
});

