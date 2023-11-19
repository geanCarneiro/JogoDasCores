jQuery(function (){
        
    for(var i = 0; i < 10; i++) {
        novaCor();
    }

    coresEscolhidas.forEach((value, index) => {
        let novoElemento = jQuery('<div>');
        novoElemento.css('background-color', value);
        novoElemento.appendTo('#tabelaCores');

        let p = jQuery('<div>', {
            class: 'nomeCor'
        });
        p.css('background-color', 'white');
        p.css('border', '0.1rem solid black');
        p.css('display', 'block');
        p.text(value);
        p.appendTo(novoElemento);
    });
    

});

let coresEscolhidas = [];

const novaCor = function() {
    if(coresEscolhidas.length == cores.length) return null;
    let novaCor;
    do {
        novaCor = cores[Math.floor(Math.random() * 148)]
    } while (coresEscolhidas.includes(novaCor));
    coresEscolhidas.push(novaCor);
};

async function getJSON(caminho) {
    let resposta = await fetch(caminho);

    if(resposta.ok) {
        return await resposta.json();
    }
    
    return []
}