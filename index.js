const doctorName = document.getElementById("doctor");
const appointmentButton = document.querySelector('.button');
const appointmentModal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');

appointmentButton.addEventListener('click', () => {
  appointmentModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  appointmentModal.style.display = 'none';
});


function validateForm() {
  const patientName = document.querySelector('#name').value;
  const patientPhone = document.querySelector('#phone').value;
  const patientEmail = document.querySelector('#email').value;

  if (!patientName || !patientPhone || !patientEmail) {
    alert('Please fill out all fields.');
    return false;
  }

  if (patientPhone.length !== 10) {
    alert('Please enter a 10-digit phone number.');
    return false;
  }

  return true;
}

const appointmentForm = document.querySelector('.modal form');
appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    alert('Your appointment has been scheduled.');
    appointmentModal.style.display = 'none';
    appointmentForm.reset();
  }
});
