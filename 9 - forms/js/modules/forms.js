// document.forms; // lista com os formulários
// document.forms.contato; // form com nome de contato
// document.forms.contato.elements; // elementos
// document.forms[0].elements[0].value; // valor do primeiro
export default function initForm() {}

const contato = document.querySelector("#contato");
// console.log(document.forms[0]);
console.log(contato.elements);
// console.log(contato.elements.mensagem);
console.log(contato.elements.nome.value);

/* 
Values: A propriedade value retorna o valor do elemento no formulário.
Se adionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar
o valor sempre que ele mudar.
change dispara quando houver mudanças
*/

const texto = document.querySelector(".texto");

// function handleKeyUp(event) {
//   const target = event.target;

//   if (!target.checkValidity()) {
//     target.classList.add("invalido");
//     contato.nome.setCustomValidity("Nome é necessário!");
//     target.nextElementSibling.innerText = target.validationMessage;
//   }

//   console.log(event.target.value);
//   texto.innerText = event.target.value;
// }
// function handleKeyUp(event) {
//   console.log(event.target.value);
//   document.body.style.backgroundColor = event.target.value;
// }

// contato.addEventListener("keyup", handleKeyUp);
// contato.addEventListener("change", handleKeyUp);

/*
    validação: O método checkValidity verifica se um input com o atributo required, é válido
    ou não. A propriedade validationMessage possui a mensagem padrão de erro do browser. é possível
    modificar com setCustomValidity('')
*/

// Pegar todos os dados de uma unica vez.
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

contato.addEventListener("change", handleChange);
