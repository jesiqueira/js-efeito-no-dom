export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const teste = [1, 2, 3, 4, 5].indexOf(5);

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// const agora = new Date();
// const futuro = new Date("Dec 24 2023 23:59");

// console.log(agora);
// console.log("=========");
// console.log(agora.getDate());
// console.log("=========");
// console.log(futuro);
// console.log("=========");
// console.log(agora.getTime());
// console.log("=========");
// console.log(futuro.getTime());

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// console.log("=========");
// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());
// console.log(Math.floor(diasFuturo - diasAgora));

// // Dias até
// // Podemos criar um objeto com um data no futuro, passando uma string com o valor da data
// const promocao = new Date("December 24 2023 23:59");

// function conventerEmDias(time) {
//     return time / (24 * 60 * 60 * 1000);
// }

// const diasAtual = conventerEmDias(agora)
// const diasPromocao = conventerEmDias(promocao)

// const faltam = diasPromocao - diasAtual

// console.log("=========");
// console.log(Math.floor(faltam));

// console.log(diasSemana);
// console.log(horarioSemana);
// console.log(diaAgora);
// console.log(horarioAgora);
// console.log(teste);
// console.log(semanaAberto);
// console.log(horarioAberto);
