document.addEventListener("click", function (event) {
    const menu = document.getElementById("navbarSupportedContent");
    const button = document.querySelector(".navbar-toggler");
 
    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = button.contains(event.target);
 
    if (!clickedInsideMenu && !clickedButton) {
        const bsCollapse = bootstrap.Collapse.getInstance(menu);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    }
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar-custom");
  if (window.scrollY > 20) {
    nav.classList.add("nav-small");
  } else {
    nav.classList.remove("nav-small");
  }
});

window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
  });
});
function mostrarAlerta() {
    const alerta = document.getElementById("alerta-auto");
    if (!alerta) return; // impede erro e deixa o resto do JS funcionar

    alerta.classList.add("show");

    setTimeout(() => {
        alerta.classList.remove("show");
    }, 3000);
}


const toggleDark = document.getElementById("toggle-dark");

// Função para aplicar o modo escuro baseado no localStorage
function applyDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add("dark");
        if (toggleDark) toggleDark.innerHTML = "☀️";
    } else {
        document.body.classList.remove("dark");
        if (toggleDark) toggleDark.innerHTML = "🌙";
    }
}

// Verificar preferência salva ao carregar a página
const savedMode = localStorage.getItem("dark-mode");
if (savedMode === "enabled") {
    applyDarkMode(true);
} else if (savedMode === "disabled") {
    applyDarkMode(false);
} else {
    // Verificar preferência do sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyDarkMode(prefersDark);
}

// Evento do botão
if (toggleDark) {
    toggleDark.addEventListener("click", () => {
        const isDark = document.body.classList.contains("dark");
        
        if (isDark) {
            localStorage.setItem("dark-mode", "disabled");
            applyDarkMode(false);
        } else {
            localStorage.setItem("dark-mode", "enabled");
            applyDarkMode(true);
        }
    });
}

console.log("JS carregado!");


window.addEventListener("load", () => {
    const toast = document.getElementById("toast-indigo");
    if (!toast) return;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
});
