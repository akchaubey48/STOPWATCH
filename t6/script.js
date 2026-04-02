let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let lapBtn = document.querySelector(".lap");
let lapsContainer = document.querySelector(".laps");


let hrDisplay = document.querySelector(".hr");
let minDisplay = document.querySelector(".min");
let secDisplay = document.querySelector(".sec");
let mls = document.querySelector(".mls");

let ms =0, s = 0, m = 0, h = 0;
let timer = null; // 1. Global timer variable taaki stop/reset ise control kar sakein

// Start Function
start.addEventListener('click', () => {
    // 2. Pehle se chal rahe timer ko clear karna zaroori hai 
    // taaki "Double Speed" wali problem na ho
    if (timer !== null) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        ms++; // Seconds badhao
        if(ms >99){
            ms=0;
            s++;
        }

        if (s > 59) {
            s = 0;
            m++;
            if (m > 59) {
                m = 0;
                h++;
            }
        }

        // 3. Formatting (Leading Zero add karna)
       hrDisplay.textContent = String(h).padStart(2, '0');
       minDisplay.textContent = String(m).padStart(2, '0');
       secDisplay.textContent = String(s).padStart(2, '0');
       mls.textContent = String(ms).padStart(2, '0');

    }, 10);
});

// Stop Function
stop.addEventListener('click', () => {
    clearInterval(timer); 
     timer = null;
    // Timer ko pause kar deta hai
});

// Reset Function
reset.addEventListener('click', () => {
    clearInterval(timer); // Timer roko
    timer = null;
    s = 0; m = 0; h = 0; // Variables zero karo
    
    // Display ko wapas 00 kar do
    mls.textContent="00";
    secDisplay.textContent = "00";
    minDisplay.textContent = "00";
    hrDisplay.textContent = "00";
    lapsContainer.innerHTML = "";
});


lapBtn.addEventListener('click', () => {
    if (timer === null) return; // no running → no lap

    let lapTime = 
        `${String(h).padStart(2,'0')} : 
         ${String(m).padStart(2,'0')} : 
         ${String(s).padStart(2,'0')} : 
         ${String(ms).padStart(2,'0')}`;

    let lapItem = document.createElement("div");
    lapItem.textContent = lapTime;

    lapsContainer.prepend(lapItem); // latest lap on top
});