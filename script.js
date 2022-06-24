let anoNascimento = document.querySelector('#ano');
let sexo = document.getElementsByName('sexo');
let mensagem = document.getElementById("msg");
let section = document.querySelectorAll("#section");
let imagem = document.createElement("img");
imagem.setAttribute("id", "imagem");

const date = new Date();
const anoAtual = date.getFullYear();

let marcouGenero = false;
let genero = ""
let texto = ""
let idade = 0;


function verificaGenero()
{
    if(sexo[0].checked)
    {
        genero = "um homem";
        marcouGenero = true
    }
    else 
    {
        genero = "uma mulher";
        marcouGenero = true
    }
}

function verificarIdade()
{
    verificaGenero();

    idade = (anoAtual - anoNascimento.value);


    if(anoNascimento.value == "" || anoNascimento.value == null)
    {
        texto = "Por favor, digite seu ano de nascimento";
    }
    else if(anoNascimento.value > anoAtual || anoNascimento.value < 1900)
    {
        texto = "Por favor, digite um ano válido";
    }
    else if(marcouGenero == false)
    {
        texto = "Por favor, escolha o seu gênero";
    }
    else if (idade < 12)
    {
        texto = `Detectamos ${genero} com ${idade} anos`;
        
        if(genero == "um homem")
        {
            imagem.setAttribute("src","images/menino.png");   
        }
        else
        {
            imagem.setAttribute("src","images/menina.png");   
        }     
    }
    else if(idade < 18) 
    {
        texto = `Detectamos ${genero} com ${idade} anos`;

        if(genero == "um homem")
        {
            imagem.setAttribute("src","images/adolescente_h.png");   
        }
        else
        {
            imagem.setAttribute("src","images/adolescente_m.png");   
        }
    }    
    else if (idade < 40) 
    {
        texto = `Detectamos ${genero} com ${idade} anos`;

        if(genero == "um homem")
        {
            imagem.setAttribute("src","images/homem.png");   
        }
        else
        {
            imagem.setAttribute("src", "images/mulher.png");
        }
    }
    else if (idade < 60) 
    {
        texto = `Detectamos ${genero} com ${idade} anos`;

        if(genero == "um homem")
        {
            imagem.setAttribute("src","images/senhor.png");   
        }
        else
        {
            imagem.setAttribute("src","images/senhora.png");   
        }
    }
    else 
    {
        texto = `Detectamos ${genero} com ${idade} anos`;

        if(genero == "um homem")
        {
            imagem.setAttribute("src", "images/vovô.png");   
        }
        else
        {
            imagem.setAttribute("src","images/vovo.png");   
        }
    }

    mensagem.style.textAlign = "center";
    mensagem.innerHTML = texto;
    mensagem.appendChild(imagem);
}


