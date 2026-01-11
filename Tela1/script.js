function login() {
  const id = document.getElementById("colaboradorId").value;

  let colaborador = {001: "Ana Silva"}, {002: "Bruno Souza"}, {003: "Carla Dias"};

  if (id === "colaboradorId") {
    window.location.href = "../Tela3/index.html";
    alert("Informe o ID do colaborador");
    return;
  }

  if (id === "admin") {
    window.location.href = "../Tela2/index.html";
  }

  alert("Login realizado: " + id);
}
