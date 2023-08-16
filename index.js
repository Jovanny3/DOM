import hamburgerMenu from "./sessões/menu_hamburguesa.js";
import { relogioDigital,alarme } from "./sessões/relogio_digital.js";
import { moveBall, shortcuts } from "./sessões/eventos_teclado.js";
import countdown from "./sessões/contagem_regressiva.js";
import scrollTopButton from "./sessões/botton_scroll.js";
import darkMode from "./sessões/dark_mode.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{

    hamburgerMenu(".panel-btn", ".panel",".menu a");
    relogioDigital("#relogio", "#ativar-relogio", "#desativar-relogio");
    alarme("assets/alarme.mp3", "#ativar-alarme", "#desativar-alarme");
    countdown(
     "countdown",
     "January 01, 2024 00:00:00",
     "Feliz Ano Novo!!");
     scrollTopButton(".scroll-top-btn");
    });
    
    d.addEventListener("keydown", (e) => {
        shortcuts(e);
        moveBall(e, ".ball", ".stage")
    });
    
    darkMode(".dark-theme-btn", "dark-mode");