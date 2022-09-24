// Mise en forme du bouton ChangeTheme
const switchThemeBtn = document.querySelector('.changeTheme')
    let toggleTheme = 0;
    
    switchThemeBtn.addEventListener('click', () => {
    
        if(toggleTheme === 0) {
            document.documentElement.style.setProperty('--ecriture', '#fff');
            document.documentElement.style.setProperty('--background', '#111');
            document.documentElement.style.setProperty('--bg-cours', '#222');
            document.documentElement.style.setProperty('--color-cours', '#aaa');
            document.documentElement.style.setProperty('--separation-table', 'rgba(255, 255, 255, 0.349)');
            // Changement de l'image de fond
            const image_de_fond = document.getElementById('home');
            image_de_fond.style = 'background:linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.7)),url(../img/dark-mode.webp), url(img/dark-mode.webp) no-repeat; background-size: cover; background-position: center;';
            // Changement de l'icon du thème
            const icon_theme = document.getElementById('changeTheme');
            icon_theme.style = 'background-image:url(../img/icon-light-mode.webp), url(img/icon-light-mode.webp);';
            toggleTheme++;
        } else {
            document.documentElement.style.setProperty('--ecriture', '#111');
            document.documentElement.style.setProperty('--background', '#fff');
            document.documentElement.style.setProperty('--bg-cours', '#ccc');
            document.documentElement.style.setProperty('--color-cours', '#111');
            document.documentElement.style.setProperty('--separation-table', 'rgb(0 0 0 / 35%)');
            // Changement de l'image de fond
            const image_de_fond = document.getElementById('home');
            image_de_fond.style = 'background:linear-gradient(rgba(17, 17, 17, 0.5), rgba(17, 17, 17, 0.5)),url(../img/light-mode.webp), url(img/light-mode.webp) no-repeat; background-size: cover; background-position: center;';
            // Changement de l'icon du thème
            const icon_theme = document.getElementById('changeTheme');
            icon_theme.style = 'background-image:url(../img/icon-dark-mode.webp), url(img/icon-dark-mode.webp);';
            toggleTheme--;
        }
    })



// MISE EN FORME DU BOUTON RETOUR HAUT DE PAGE
// Recherche du lieu du bouton
var mybutton = document.getElementById("myBtn");

// Fonction qui contrôle a partir de quand le bouton apparait
window.onscroll = function() {scrollFunction()};
// Lorsque l'utilisateur descend de 20px depuis le haut du document, afficher le bouton
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Lorsque l'utilisateur clique sur le bouton, il fait défiler le document vers le haut
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//MISE EN FORME DU GENERATEUR DE COULEUR
function myColor() {
                                  
    // Get the value return by color picker
    var color = document.getElementById('colorPicker').value;

    // Take the hex code
    document.getElementById('box').value = color;
}

// When user clicks over color picker,
// myColor() function is called
document.getElementById('colorPicker')
    .addEventListener('input', myColor);



