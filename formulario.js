function enviarWhats(event) {
  event.preventDefault();


  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let assunto = document.getElementById("assunto").value;
  let mensagem = document.getElementById("mensagem").value;

  let texto = `Olá, meu nome é ${nome}%0A` +
              `Telefone: ${telefone}%0A` +
              `Interesse: ${assunto}%0A` +
              `Mensagem: ${mensagem}`;

  let numero = "5531992835225"; // 🔴 TROQUE PELO SEU NÚMERO

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}