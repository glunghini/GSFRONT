document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isLoggedIn) {
      const loginButton = document.querySelector(".login");
      if (loginButton) {
        loginButton.remove();

        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Sair";
        logoutButton.style.backgroundColor = "red";
        logoutButton.style.color = "white";
        logoutButton.style.border = "none";
        logoutButton.style.padding = "15px 40px";
        logoutButton.style.cursor = "pointer";
        logoutButton.style.borderRadius = "10px";

        logoutButton.addEventListener("click", () => {
          localStorage.removeItem("isLoggedIn");
          window.location.reload();
        });

        const header = document.querySelector(".headerlanding div:last-child");
        header.appendChild(logoutButton);
      }
    }
  });