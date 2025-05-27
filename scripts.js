//cotacao de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;


//Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input",() => {

const hasCharactersRegex= /\D+/g
console.log(amount.value)
amount.value = amount.value.replace(hasCharactersRegex,"")

})
//Captando o evento de submit do formulário
form.onsubmit=(event) => {
 event.preventDefault()

 switch (currency.value){
 case "USD":
 convertCurrency(amount.value, USD, "US$")
 break
 case "EUR":
  convertCurrency(amount.value, EUR, "EUR€")
  break
  case "GBP":
  convertCurrency(amount.value, GBP, "GBP£")
  break
 }
}


// Funcao para convrter a moeda.
function convertCurrency(amount,price,symbol){
    console.log(amount,price,symbol)

}