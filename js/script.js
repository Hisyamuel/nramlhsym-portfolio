// Ini Javascript 2 //

// Form //

function validateform() {
  const name = document.getElementById('name').value;
  const birth = document.getElementById('birth').value;
  const gender = document.getElementById('gender').value;
  const message = document.getElementById('message').value;


  if (!name || !birth || !gender || !message) {
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


  

