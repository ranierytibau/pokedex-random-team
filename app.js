'use strict'

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png  (Original URL)

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

//const TEAM = new Array ---- // Cause timeOut load page !
const TEAM = [];
let find = false;

while (TEAM.length !== 6) {

    for (let i = 1; i <= 6; i++) {

        const POKEMON = Math.floor(Math.random() * 151) + 1;

        for (let i = 0; i <= TEAM.length; i++) {
            if (TEAM[i] === POKEMON) {
                find = true;
            };
        };

        if (find === false) {
            TEAM.push(POKEMON);
        } else {
            break;
        };

        const POKE_BOX = document.createElement('div');
        const NUMBER = document.createElement('span');
        NUMBER.innerText = `#${POKEMON}`;
        const img = document.createElement('img');
        img.src = `${baseURL}${POKEMON}.png`;

        POKE_BOX.appendChild(img);
        POKE_BOX.appendChild(NUMBER);
        container.appendChild(POKE_BOX);
    };
};

const RELOAD_BUTTON = document.querySelector('.reload');

const RELOADED = () => {
    document.location.reload();
}

RELOAD_BUTTON.addEventListener('click', RELOADED);












