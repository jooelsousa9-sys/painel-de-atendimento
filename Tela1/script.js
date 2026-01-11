let colaboradorId = "";

function login() {
  const id = document.getElementById("colaboradorId").value;

  if (!id) {
    alert("Informe o ID do colaborador");
    return;
  }

  if (id === "admin") {
    window.location.href = "../Tela2/index.html";
  }

  alert("Login realizado: " + id);
}
