const titre = document.getElementsByClassName('titre');
const texte = document.getElementsByClassName('texte');

for (let i = 0; i < titre.length; i++) {
    titre[i].style.color = 'blue';
    titre[i].style['font-family'] = 'Arial';
}

for (let i = 0; i < texte.length; i++) {
    texte[i].style.color = 'blue';
    texte[i].style['font-family'] = 'Arial';
}