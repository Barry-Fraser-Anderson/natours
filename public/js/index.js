// eslint-disable
import { displayMap } from './leaflet';
import { login } from './login';

const mapBox = document.querySelector('#map');
const loginForm = document.querySelector('.form');

// ----------------------------------------------
// Get locations from HTML
// ----------------------------------------------
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });