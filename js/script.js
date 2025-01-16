/*VARIABLES */
heroSection = document.getElementById('hero-section');
construccionesSection = document.getElementById('construcciones-section');

function showConstrucciones(){
    heroSection.classList.add('hide');
    construccionesSection.classList.remove('hide');
}