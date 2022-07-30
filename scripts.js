function verificar(){
    let data = new Date();
    let atual = data.getFullYear();
    let foto = document.querySelector('div#foto');
    let masc = document.getElementById('mas');
    let fem = document.getElementById('fem');
    let ano = document.getElementById('txt');
    ano = Number(ano.value); 
    if (ano > atual || ano == 0){
        alert('[ERRO]. Verifique os dados e tente novamente !');
    }else {
        let sexo = document.getElementsByName('sexo');
        let idade = atual - ano;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id','imagem');
        if (sexo[0].checked){
            genero = 'Masculino';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','criancaMas.jpg');
            }else if( idade < 21){
                img.setAttribute('src','jovemMas.jpg');
            }else if(idade < 50){
                img.setAttribute('src','adultoMas.jpg');
            }else{
                img.setAttribute('src','idoso.jpg');
            }

        }else {
            genero = 'Feminino';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','family.jpg');
            }else if( idade < 21){
                img.setAttribute('src','jovemFem.jpg');
            }else if(idade < 50){
                img.setAttribute('src','adultoFem.jpg');
            }else{
                img.setAttribute('src','idosa.jpg');
            }
        }

        foto.style.textAlign = 'center';
        foto.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`;
        foto.appendChild(img);
    }
}
