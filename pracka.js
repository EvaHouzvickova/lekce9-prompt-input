//zadavani sirku, vysku, hloubky pracku 

const sirkaMista = 62;
const vyskaMista = 70;
const hloubkaMista = 80;


let sirkaPracky = parseInt(prompt('Zadej šířku pračky', 'cm'));
let vyskaPracky = parseInt(prompt('Zadej výšku pračky', 'cm'));
let hloubkaPracky = parseInt(prompt('Zadej hloubku pračky', 'cm'));


    if (sirkaPracky < sirkaMista && vyskaPracky < vyskaMista && hloubkaPracky < hloubkaMista) {
        alert('Super, pračka se vejde na místo.');
    }
    else {
        alert('Bohužel, pračka je příliš veliká a na místo se nevejde.');
    }


