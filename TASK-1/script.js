window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.Navbar');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
/*-----------Submitted------------*/
const submittedButton = document.querySelector('.Send Message');

submittedButton.addEventListener('click', () => {
    alert("Submitted_Succesfully");
});
  