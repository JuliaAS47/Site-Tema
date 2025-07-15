'use strict';
const switcher = document.querySelector('.btn'); // Seleciona o botão

switcher.addEventListener('click', function () {
    // Verifica se o tema atual é 'dark-theme'
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme'); // Remove 'dark-theme'
        document.body.classList.add('light-theme'); // Adiciona 'light-theme'
        this.textContent = 'Dark'; // Define o texto do botão
        console.log('Tema atual: light-theme'); // Exibe no console
    } else {
        document.body.classList.remove('light-theme'); // Remove 'light-theme'
        document.body.classList.add('dark-theme'); // Adiciona 'dark-theme'
        this.textContent = 'Light'; // Define o texto do botão
        console.log('Tema atual: dark-theme'); // Exibe no console
    }
});
