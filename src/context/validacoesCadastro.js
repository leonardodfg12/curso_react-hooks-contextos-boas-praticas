import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: naoPrecisaValidar,
  senha: naoPrecisaValidar,
  nome: naoPrecisaValidar,
});

function naoPrecisaValidar(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}

export default ValidacoesCadastro;
