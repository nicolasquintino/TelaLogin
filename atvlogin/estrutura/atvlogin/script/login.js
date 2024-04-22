const users = [
  { nome: "usuario1", senha: "senha1" },
  { nome: "usuario2", senha: "senha2" },
 //pode adionar infinitos usuários porém manualmente
];

function fazerLogin() {
  const nome = document.getElementById("usuario").value; 
  const senha = document.getElementById("senha").value; 

  if (nome === "" || senha === "") {
    alert("Preencha o nome de usuário e a senha.");//caso ficar em branco aparecer pra preencher o usuário/senha.
    return;
  }

  const usuarioEncontrado = users.find(usuario =>
    usuario.nome === nome && usuario.senha === senha
  );

  if (usuarioEncontrado) {
    window.location.href = "sucesso.html"; //direciona para o html onde diz que está logado
  } else {
    alert("Nome de usuário ou senha inválidos."); //aqui está a mensagem de erro caso não seja escrito o usuário antes criado.
  }
}