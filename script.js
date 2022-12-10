const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select');

const convertValue = () => {
    const inputReais = document.getElementById('input-real').value
    const ValueReal = document.getElementById('real-value')
    const ValueDolar = document.getElementById('dolar-value')



    const dolar = 5.1
    const Euro = 5.9
    const Bitcoin = 89.84771


    ValueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais);


    if (select.value === "US$ Dólar Americano") {

        ValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)

    }

    if (select.value === "€ Euro") {

        ValueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / Euro)

    };

    if (select.value === "₿ Bitcoin") {

        ValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputReais / Bitcoin);

    }

};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-Name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/Euro.svg"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/Bitcoin.png"
    }


    convertValue()
}

button.addEventListener('click', convertValue)
select.addEventListener('change', changeCurrency)