function ocultar_necessidades() {
  const imagensNecessidades = document.getElementsByTagName("img");
  
  for (let i=0; i < imagensNecessidades.length; i++){
    if(imagensNecessidades[i].src.includes("necessidades_especiais")){
        console.log("Necessidades Especiais")
        const parent = imagensNecessidades[i].parentElement
        parent.style.display = "none"
    }
  }
}

ocultar_necessidades()
