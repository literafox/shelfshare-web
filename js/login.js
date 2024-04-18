function verificaForm() {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const passwordlength = document.getElementById("inputPassword").length;
  
    if (email === "") {
      document.getElementById("erroEmail").innerHTML = "Preencha os campos primeiro!";
    }
    if (password === "") {
      document.getElementById("erroPassword").innerHTML = "Preencha os campos primeiro!";
    }
    if (passwordlength < 6) {
      document.getElementById("erroPassword").innerHTML = "Sua senha deve ter pelo menos 6 caracteres!";
    }
}