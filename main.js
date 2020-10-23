const annualPrices = document.querySelectorAll(".card_price_num--annually");
const monthPrices = document.querySelectorAll(".card_price_num--monthly");

document.getElementById("toggle_button").addEventListener("click", () => {
    for (let annualPrice of annualPrices) {
        annualPrice.classList.toggle("hidden");
    }
    for (let monthPrice of monthPrices) {
        monthPrice.classList.toggle("hidden");
    }
    document.getElementById("toggle_button_circle").classList.toggle("go-right");
})

