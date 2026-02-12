// richiamo degli ID dei lable
const fullNameEl = document.getElementById("fullName");
const distanceEl = document.getElementById("distance");
const ageGroupEl = document.getElementById("ageGroup");

//Richiamo del FORM
const formEl = document.querySelector("form")

formEl.addEventListener("submit", function (e) {
    e.preventDefault()

    const nome = fullNameEl.value;
    const km = distanceEl.value;
    const eta = ageGroupEl.value;

    console.log(nome, km, eta);
    
})
