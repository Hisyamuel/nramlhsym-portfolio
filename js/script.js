// Ini Sambutan //

window.onload = function ubahNama() {
  let nuevoTexto = prompt("Masukkan nama anda :", "Guest");

  if (nuevoTexto != null) {
    document.getElementById("user").innerText = nuevoTexto;
  }
}

// Navigasi //
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    // Toggle class 'active' pada hamburger dan nav-menu saat diklik
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Tutup menu saat link diklik (opsional)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


// Form //

function messageForm() {
  let name = document.getElementById('name').value;
  let birth = document.getElementById('birth').value;
  let gender = document.getElementById('gender').value;
  let message = document.getElementById('message').value;


  if (name === "" || birth === "" || gender === "" || message === "") {
      alert('Pesan Harus Terisi');
      return false;
  }

  setSenderUI(name, birth, gender, message);

  return false;
}

  // Output Form //
  function setSenderUI (name, birth, gender, message) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("birth").innerHTML = birth;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("message").innerHTML = message;

    
// Validasi Form //
    if (!name || !birth || !gender || !message) {
       alert('Pesan Harus Terisi');

       return false;
}};


  

