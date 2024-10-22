document.getElementById('apprenantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('name').value;
    const image = document.getElementById('photo').files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        localStorage.setItem('name', nom);
        localStorage.setItem('photo', reader.result);

        window.location.href= 'certificat/certficat.html';
    };
    if (image) {
        reader.readAsDataURL(image);
    }
});
