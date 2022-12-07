var form = document.querySelector("#form")
var nome = form.querySelector("#nome")
var celular= form.querySelector("#Celular")
var Cidade = form.querySelector("#Cidade")
var altura = form.querySelector("#altura")
array = []
form.addEventListener("submit",clicar)




function clicar(form){
    form.preventDefault()
    pessoas = {
        nome:nome.value,
        celular:celular.value,
        Cidade:Cidade.value,
        altura:altura.value
    }
    
    array.push(pessoas)
    console.log(array)
    

}