// Ini Sambutan //
document.addEventListener('DOMContentLoaded', function() {
    if (window.customNotify) {
        window.customNotify.showConfirm(
            "Halo! Selamat datang. Silahkan masukkan nama Anda :",
            (namaInput) => {
                const name = namaInput && namaInput.trim() !== "" ? namaInput : "Guest";
                const userElement = document.getElementById("user");
                if (userElement) {
                    userElement.innerText = name;
                    window.customNotify.showToast(`Halo ${name}, selamat datang di web portfolio saya`, "info");
                }
            },
            () => {
                window.customNotify.showToast("Menjelajah sebagai Tamu", "info");
            },
            {
                title: "Greetings!",
                confirmText: "Simpan",
                cancelText: "Lewati"
            }
        );
    }
});

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

// Logic Kembali Ke Atas
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
    // Memantau Scroll User
    window.addEventListener("scroll", () => {
        // Jika scroll lebih dari 300px ke bawah, akan memunculkan tombol
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // Aksi Klik (Scroll ke Atas)
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
}

  

