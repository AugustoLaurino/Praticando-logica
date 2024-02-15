function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}
let num = 0;
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd < num){
        alert('Valor inválido, tente novamente');
    }else if (qtd > qtdPista){
        alert('Quantidade indisponivel para tipo pista');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd < num){
        alert('Valor inválido, tente novamente');
    }else if (qtd > qtdSuperior){
        alert('Quantidade indisponivel para tipo superior');
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd < num){
        alert('Valor inválido, tente novamente');
    }else if (qtd > qtdInferior){
        alert('Quantidade indisponivel para tipo inferior');
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}
