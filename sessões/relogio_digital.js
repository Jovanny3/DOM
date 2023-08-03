 const d = document;
 
 export function relogioDigital(clock,btnPlay, btnStop){
     let clockTempo;

    d.addEventListener("click", e=>{

        if(e.target.matches(btnPlay)){

            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 2000);

            e.target.disabled = true;
        }



         if(e.target.matches(btnStop)){

            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null ;
            d.querySelector(btnPlay).disabled = false;
        }
    });

 }


 export function alarme(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarme = d.createElement("audio");
    $alarme.src = sound;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(()=>{
                $alarme.play();
            }, 2000);

            e.target.disable = true;

        }

         if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarme.pause();
            $alarme.currentTime = 0;
            d.querySelector(btnPlay).disable = false;
        }
    })
 }