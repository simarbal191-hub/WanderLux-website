function calculateCost() {
  let rate = document.getElementById("destination").value;
  let travellers = document.getElementById("travellers").value;
  let days = document.getElementById("days").value;
  let style = document.getElementById("style").value;

  let total = rate * travellers * days * style;

  document.getElementById("result").innerText =
    `Estimated Trip Cost: $${total}`;
}
