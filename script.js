function openModal(type) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  modal.style.display = 'flex';

  switch(type) {
    case 'appointment':
      body.innerHTML = '<h3>Schedule Appointment</h3><p>Coming soon...</p>';
      break;
    case 'intake':
      body.innerHTML = '<h3>Complete Intake</h3><p>Coming soon...</p>';
      break;
    case 'faq':
      body.innerHTML = '<h3>FAQ</h3><p>Coming soon...</p>';
      break;
    case 'resources':
      body.innerHTML = '<h3>Resources</h3><p>Coming soon...</p>';
      break;
    case 'privacy':
      body.innerHTML = '<h3>Privacy Policy</h3><p>Coming soon...</p>';
      break;
    default:
      body.innerHTML = '<h3>Information</h3><p>Coming soon...</p>';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

