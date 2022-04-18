/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

function secti(a, b) {
    let c = a + b;
    return c;
}

const scitej = document.getElementById('scitej');
let vysledek = document.querySelector('#vysledek > span');

let prvniCislo = document.querySelector('input[id=a]').value;
let druheCislo = document.querySelector('input[id=b]').value;

scitej.addEventListener('click', () => {
    let prvniCislo = parseInt(document.querySelector('input[id=a]').value);
    let druheCislo = parseInt(document.querySelector('input[id=b]').value);
    vysledek.innerHTML = secti(prvniCislo, druheCislo);
    }
)


