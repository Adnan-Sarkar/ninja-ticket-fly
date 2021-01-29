// display value change function

function displayNone(id) {
  const fullSection = document.getElementById(id);
  fullSection.style.display = "none";
}

function displayBlock(id) {
  const fullSection = document.getElementById(id);
  fullSection.style.display = "block";
}

// get input value function

function ticketTypeValue(ticketType) {
  const TicketInput = document.getElementById(
    ticketType + "-class-ticket-count"
  );
  const TicketCount = parseInt(TicketInput.value);
  return TicketCount;
}

// condition for plus and minus function

function handleTicketCountChange(ticketType, isIncrease) {
  const TicketCount = ticketTypeValue(ticketType);
  let TicketNewCount = TicketCount;
  if (isIncrease == true) {
    TicketNewCount = TicketCount + 1;
  }
  if (isIncrease == false && TicketCount > 0) {
    TicketNewCount = TicketCount - 1;
  }
  document.getElementById(
    ticketType + "-class-ticket-count"
  ).value = TicketNewCount;

  claculateTotal();
  let confirmationShowTotal = claculateTotal();
  document.getElementById("show-total").innerText =
    "$ " + confirmationShowTotal;
}

// calculate subTotal, vat and total function

function claculateTotal() {
  const firstClassTicketCount = ticketTypeValue("first");
  const economyClassTicketCount = ticketTypeValue("economy");

  const subTotal = firstClassTicketCount * 150 + economyClassTicketCount * 100;
  document.getElementById("sub-total").innerText = subTotal;

  const vat = Math.round(subTotal * 0.1);
  document.getElementById("vat").innerText = vat;

  const total = subTotal + vat;
  document.getElementById("total").innerText = total;

  return total;
}

// after booking

const bookingBtn = document.getElementById("booking-btn");
bookingBtn.addEventListener("click", function () {
  displayNone("header-area");
  displayNone("main-area");
  displayBlock("confirmation-area");
});
