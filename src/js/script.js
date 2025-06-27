document.addEventListener('DOMContentLoaded', function() {
    console.log("Le site ViteButNotTooMuch est chargé !");

    const mainContent = document.getElementById('mainContent');

    if (mainContent) { 
        setTimeout(function() {
            mainContent.classList.add('is-visible');
        }, 200); 
    }

});