console.log("inizio js")

const costoKm = 0.21;
let bigliettoUnder18 = ""
let bigliettoOver65 = ""
let km = prompt("Inserisci i km da percorrere")
const costoBiglietto = (km * costoKm).toFixed(2)

console.log("Numero di km: " + km)
console.log("Costo del biglietto: " + costoBiglietto)

km = parseInt(km)

if (isNaN(km)) {
    alert("Per favore inserisci un numero valido per i Km.")
    location.reload()
}

let eta = prompt("Inserisci la tua età")

console.log("Età del passeggero: " + eta)

eta = parseInt(eta)

if (isNaN(eta)) {
    alert("Per favore inserisci un numero valido per la tua età.")
    location.reload()
} else if (eta <= 17) {
    bigliettoUnder18 = costoBiglietto - (costoBiglietto / 100 * 20).toFixed(2)
    prompt("Costo del biglietto under18: " + bigliettoUnder18 + "€")
} else if (eta >= 65) {
    bigliettoOver65 = (costoBiglietto - (costoBiglietto / 100 * 40)).toFixed(2)
    prompt("Costo del biglietto over65: " + bigliettoOver65 + "€")
} else {
    prompt("Costo del biglietto intero: " + costoBiglietto + "€")
}

console.log(`Prezzo bigglieto under 18: ${bigliettoUnder18}.
Prezzo biglietto intero: ${costoBiglietto}.
Prezzo biglietto over 65: ${bigliettoOver65}.`)