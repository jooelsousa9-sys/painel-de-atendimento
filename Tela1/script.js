function login() {
  const id = document.getElementById("colaboradorId").value;

  if (!id) {
    alert("Informe o ID do colaborador");
    return;
  }

  alert("Login realizado: " + id);
}
