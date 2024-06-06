//login
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "admin" && senha == "123"){
        alert('Sucesso')
    }
    else{
        alert('Usuário ou senha incorretos');
    }
}

function logar(event) {
    event.preventDefault();
    
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
  
    const storedUserData = localStorage.getItem("userData");
    
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      
      if (login === userData.username && senha === userData.password) {
        alert("Login realizado com sucesso!");
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "../index.html";
      } else {
        alert("Login ou senha incorretos.");
      }
    } else {
      alert("Nenhum usuário cadastrado encontrado.");
    }
  }
  
  document.getElementById("formL").addEventListener("submit", logar);


  