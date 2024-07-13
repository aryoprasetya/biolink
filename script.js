const toggleInput = document.getElementById('toggle');
const moonIcon = document.querySelector('.toggle-icons .fa-moon');
const sunIcon = document.querySelector('.toggle-icons .fa-sun');
const avatar = document.querySelector('.avatar');

toggleInput.addEventListener('change', function() {
    if (this.checked) {
        // Mode malam
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        document.body.classList.add('dark-mode');
        avatar.src = 'img/logo duwa.png'; // Ganti avatar dengan versi warna putih
    } else {
        // Mode siang
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        document.body.classList.remove('dark-mode');
        avatar.src = 'img/logo satu.png'; // Kembali avatar ke versi warna hitam
    }
});
