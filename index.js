import hamburgerMenu from "./sessões/menu_hamburguesa.js";
import { relogioDigital,alarme } from "./sessões/relogio_digital.js";
import { moveBall, shortcuts } from "./sessões/eventos_teclado.js";
import countdown from "./sessões/contagem_regressiva.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{

    hamburgerMenu(".panel-btn", ".panel",".menu a");
    relogioDigital("#relogio", "#ativar-relogio", "#desativar-relogio");
    alarme("assets/alarme.mp3", "#ativar-alarme", "#desativar-alarme");
    countdown(
     "countdown",
     "January 01, 2024 00:00:00",
     "Feliz Ano Novo!!")
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage")
});
 