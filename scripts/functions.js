// Function for product counter
function productAmount(isIcrement, inputField) {
    const caseNumber = document.getElementById(inputField);
    const caseNumberValue = caseNumber.value;
    const caseNewNumber = parseInt(caseNumberValue);

    let caseUpdatedNumber;

    if (isIcrement) {
        caseUpdatedNumber = caseNewNumber + 1;
        caseNumber.value = caseUpdatedNumber;
    }
    else {
        caseUpdatedNumber = caseNewNumber - 1;
        caseNumber.value = caseUpdatedNumber;
    }

    return caseUpdatedNumber;
}

// Function to calculate product price
function calculateProductPrice(elementId, productPrice, productUpdatedNumber) {
    const productPriceField = document.getElementById(elementId);
    const productTotalPrice = productUpdatedNumber * productPrice;
    productPriceField.innerText = productTotalPrice;
}

// Function to set product total price
function setAmount(elementId, value) {
    const amountField = document.getElementById(elementId);
    amountField.innerText = value;
}

// Function to calculate product total price
function calculateProductTotal() {

    const itemTotal = document.querySelectorAll('.item-total')
    let subTotal = 0;

    for (item of itemTotal) {
        subTotal = subTotal + parseInt(item.innerText);
        console.log(subTotal);
    }

    setAmount('sub-total', subTotal);

    const taxAmount = (subTotal * 0.12).toFixed(2);
    setAmount('tax', taxAmount);

    const totalPrice = (subTotal + parseFloat(taxAmount)).toFixed(2);
    setAmount('total', totalPrice);
}