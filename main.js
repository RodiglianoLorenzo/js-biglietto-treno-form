const fullNameEl = document.getElementById("fullName");
const distanceEl = document.getElementById("distance");
const ageGroupEl = document.getElementById("ageGroup");

const formEl = document.querySelector("form")

formEl.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(fullNameEl.value, distanceEl.value, ageGroupEl.value);
    
})

