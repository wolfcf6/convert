//cotação de moedas do dia.
const USD = 5.70
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  console.log(amount.value)
  amount.value = amount.value.replace(hasCharactersRegex, "")
})
//Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
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
function convertCurrency(amount, price, symbol) {
  try {
    //exbindo a cotacao da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    //Exibe o resultado total.
    result.textContent = total

    //Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)

    //Remove a clase do footer removendo ele da tela.
    footer.classList.remove("show-result")

    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}
//Formata a moeda em real brasileiro
function formatCurrencyBRL(value) {
  //Converte para numero para utilizar o toLocaleString para formatar no padrao BRL (00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
