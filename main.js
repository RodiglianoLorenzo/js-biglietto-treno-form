// Prendo gli elementi dal DOM
const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age");
const formEl = document.getElementById("ticketForm");

// Gestione submit del form
formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    // Valori inseriti dall'utente
    const km = Number(distanceEl.value);
    const age = Number(ageEl.value);

    // Prezzo per il treno: 0.21€ per km
    const pricePerKm = 0.21;
    let basePrice = km * pricePerKm;
    let finalPrice = basePrice;

    if (age < 18) {
        // -20% se minorenne
        finalPrice = basePrice * 0.8;
        console.log("Sconto 20% applicato (minorenne)");
    } else if (age >= 65) {
        // -40% se over 65
        finalPrice = basePrice * 0.6;
        console.log("Sconto 40% applicato (over 65)");
    } else {
        console.log("Nessuno sconto");
    }

    console.log("Distanza:", km, "km");
    console.log("Età:", age);
    console.log("Prezzo base:", basePrice.toFixed(2) + "€");
    console.log("Prezzo finale:", finalPrice.toFixed(2) + "€");
});