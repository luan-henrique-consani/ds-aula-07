button.addEventListener("click", (event) => {
  event.preventDefault();
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "senha123") {
    alert("Sucesso");
    window.location.href = "pages/telaBal.html";
  } else {
    alert("Preencha os campos ou login e senha errados!");
  }
});
