const doctorName = document.getElementById("doctor");
const doctorList = document.getElementById("doctor-list")
const appointmentButton = document.querySelector('.button');
const appointmentModal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');

function fetchData(doctorID)
{
  fetch(`http://localhost:3000/data/${doctorID}`)
  .then(response => response.json())
  .then(data => doctorName.textContent = data.first_name)
}
function fetchDoctors()
   {
    fetch('http://localhost:3000/data/')
     .then(response => response.json())
     .then(data => {
      if (doctor.first_name)
      {
        const li = document.createElement('li')
        li.innerText = doctor.first_name;
        li.addEventListener("click", () => {
          fetchData(doctor.id);
        })
        doctorList.appendChild(li)
      }
    })
      
 }
   
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

  appointmentForm.addEventListener('submit', (event) => {
    alert('Your appointment has been scheduled.')
  })

  if (validateForm()) {
    alert('Your appointment has been scheduled.');
    appointmentModal.style.display = 'none';
    appointmentForm.reset();
  }
});
