const BASE_URL = "https://api.frankfurter.dev/v1/2025-01-04?"

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")

const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")

const msg = document.querySelector(".msg")



for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }
        select.appendChild(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval === "" || amtval < 1){
        amtval = 1;
        amount.value = "1"
    }

    // console.log(fromCurr.value, toCurr.value);
    
    const URL = `${BASE_URL}base=${fromCurr.value.toLowerCase()}&symbols=${toCurr.value.toLowerCase()}`

    let response = await fetch(URL)
    let data = await response.json();
    let rate = data.rates[toCurr.value.toUpperCase()];

    let finalAmount = amtval * rate;
    msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    console.log(rate);
}

const updateFlag = (elm) => {
    let currCode = elm.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = elm.parentElement.querySelector("img");
    img.src = newSrc;
    
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
})

window.addEventListener("load", () => {
    updateExchangeRate();
})

