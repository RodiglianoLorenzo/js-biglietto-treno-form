// richiamo degli ID dei lable
const fullNameEl = document.getElementById("fullName");
const distanceEl = document.getElementById("distance");
const ageGroupEl = document.getElementById("ageGroup");
//Richiamo del FORM
const formEl = document.querySelector("form")
//RICHHIAMO della tabella
const nomePasseggeroEl = document.getElementById("NomePasseggero");
const OffertaEl = document.getElementById("Offerta");
const CarozzaEl = document.getElementById("Carozza");
const codiceCP = document.getElementById("codiceCP");
const CostoBigliettoEl = document.getElementById("CostoBiglietto");





formEl.addEventListener("submit", function (e) {
    e.preventDefault()

    const nome = fullNameEl.value;
    const km = distanceEl.value;
    const eta = ageGroupEl.value;
    const Offerta = OffertaEl.value;

    nomePasseggeroEl.innerHTML = nome;


    CarozzaEl.innerHTML = Math.floor(Math.random() * 10) + 1
    codiceCP.innerHTML = Math.floor(Math.random() * 1000) + 10000



    //calcolo per il prezzo del biglietto
    let total_price = km * 0.21;


    if (eta === "minor") {
        total_price = total_price - (total_price * 20) / 100;
        
        CostoBigliettoEl.innerHTML = total_price;

    } else if (eta === "senior") {
        total_price = total_price - (total_price * 40) / 100;
       
       CostoBigliettoEl.innerHTML = total_price;

    } else {
         CostoBigliettoEl.innerHTML = total_price;
    }
})
