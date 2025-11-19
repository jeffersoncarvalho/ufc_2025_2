function testeDeQuery() {
    par = document.querySelector("p.example")
    par.style.backgroundColor = "red"
    console.log(par)
}

function testeDeQueryAll() {
    const varios = document.querySelectorAll("a#link.example")
    console.log(varios)
}

function getImagemDetalhes() {
    const imagem = document.querySelector(".me")
    //const imagem = document.querySelector(".me.me-sm")
    console.log(imagem.src)
    imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
    console.log(imagem.width)
    console.log(window.getComputedStyle(imagem).width)
}

function testeDeClasses() {
    const imagem = document.querySelector(".me")
    console.log(imagem.classList)
    imagem.classList.remove("me-sm")

}

function toggleBackground() {
    const imagem = document.querySelector("#imagem")
    imagem.classList.toggle("me")
    /*if (imagem.classList.contains("me")){
        imagem.classList.remove("me")
    }else {
        imagem.classList.add("me")
    }*/
}

function highlight() {
    const botao = document.querySelector("#meu-botao")
    if(botao.classList.contains("highlighted")){
        botao.classList.remove("highlighted")
        botao.classList.add("not-highlighted")
    }else {
        botao.classList.remove("not-highlighted")
        botao.classList.add("highlighted")
    }
}

function toggleHighlight() {
    const botao = document.querySelector("#meu-botao")
    botao.classList.toggle("highlighted")

}

function innerHtmlVsValue() {
    const par = document.getElementById("par")
    //const nome = document.getElementById("nome")
    const nome = document.querySelector("#nome")

    //par.innerHTML = "<b>Desenvolvimento de Software para a WEB</b>"
    //par.innerText = "<b>Desenvolvimento de Software para a WEB</b>" 
    par.textContent = "<b>Desenvolvimento de Software para a WEB</b>"
    nome.value = "Jefferson de Carvalho"

}

function adicionarItem() {
    const minhaDiv = document.getElementById("minha-div")
    if(minhaDiv.children.length == 0){
       let ul = document.createElement("ul")
       minhaDiv.appendChild(ul)
       let li = document.createElement( "li" );
       li.innerHTML = "Item da lista!"
       ul.appendChild(li)
    }else {
        let li = document.createElement( "li" );
        li.innerHTML = "Item da lista!"
        let ul = document.getElementsByTagName("ul")[0]
        if(ul) 
            ul.appendChild(li)
    }
    
    /*if(minhaDiv.children[0] == "ul"){
        console.log("Tem ul")
    }*/
    //console.log(minhaDiv.children[0])
    //if(minhaDiv.children.contains())
    //let ul = document.createElement("ul") 
}

//testeDeQuery()
//testeDeQueryAll()
//getImagemDetalhes()
//testeDeClasses()
//innerHtmlVsValue()
//adicionarItem()