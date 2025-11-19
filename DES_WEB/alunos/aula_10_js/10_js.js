const div_wrapper = document.querySelector("#wrapper") 
//const div_wrapper = document.getElementById("wrapper")
console.log(div_wrapper)
const wrapper_p = div_wrapper.getElementsByTagName("p")
console.log(wrapper_p[0])
wrapper_p[0].style.backgroundColor = "red"
wrapper_p[0].style.color = "yellow"
wrapper_p[0].style.fontSize = "2rem"

const checks = document.getElementsByName("disciplina")
console.log(checks)

checks[1].checked = true