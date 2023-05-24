function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // esse comando cria uma referência

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // string iniciada com crase para abrigar uma variável -> template string

    tecla.onclick = function () { // função anônima usada quando se precisa passar um parâmetro
        tocaSom(idAudio);
    }
    
}

