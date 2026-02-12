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

// Dark Mode //
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Cek preferensi tersimpan
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('ph-moon', 'ph-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('ph-moon', 'ph-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('ph-sun', 'ph-moon');
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


// Form submission using Fetch to Formspree
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formspreeEndpoint = 'https://formspree.io/f/mrekpbkl';

    let name = document.getElementById('name').value;
    let birth = document.getElementById('birth').value;
    let gender = document.getElementById('gender').value;
    let message = document.getElementById('message').value;

    if (name === "" || birth === "" || gender === "" || message === "") {
        alert('Pesan Harus Terisi');
        return;
    }

    const formData = new FormData(this);

    fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            window.customNotify.showToast('Your message has been sent successfully!', "success");
            document.getElementById('contact-form').reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    window.customNotify.showToast(data["errors"].map(error => error["message"]).join(", "), "error");
                } else {
                    window.customNotify.showToast('Oops! There was a problem submitting your form', "error");
                }
            })
        }
    }).catch(error => {
        console.error('Error:', error);
        window.customNotify.showToast('Oops! There was a problem submitting your form', "error");
    });
});

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

  

