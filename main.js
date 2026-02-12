const fullNameEl = document.getElementById("fullName");
const distanceEl = document.getElementById("distance");
const ageGroupEl = document.getElementById("ageGroup");

const formEl = document.querySelector("form")

const nomePasseggeroEl = document.getElementById("NomePasseggero");
const OffertaEl = document.getElementById("Offerta");
const CarozzaEl = document.getElementById("Carozza");
const codiceCP = document.getElementById("codiceCP");
const CostoBigliettoEl = document.getElementById("CostoBiglietto");


formEl.addEventListener("submit", function(e){
    e.preventDefault()
    
    const nome = fullNameEl.value;
    const km = distanceEl.value;
    const eta = ageGroupEl.value;
    
    nomePasseggeroEl.innerHTML = nome;

})
