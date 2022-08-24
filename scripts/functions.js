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

function calculateProductPrice(elementId, productPrice, productUpdatedNumber) {
    const productPriceField = document.getElementById(elementId);
    const productTotalPrice = productUpdatedNumber * productPrice;
    productPriceField.innerText = productTotalPrice;
}

function getProductTotal(elementId) {
    const productTotalField = document.getElementById(elementId);
    const productTotalValue = productTotalField.innerText;
    const productTotal = parseFloat(productTotalValue);
    return productTotal;
}

function setAmount(elementId, value) {
    const amountField = document.getElementById(elementId);
    amountField.innerText = value;
}

function calculateProductTotal() {
    const phoneTotal = getProductTotal('phone-total');
    const caseTotal = getProductTotal('case-total');

    const subTotal = phoneTotal + caseTotal;
    setAmount('sub-total', subTotal);

    const taxAmount = (subTotal * 0.12).toFixed(2);
    setAmount('tax', taxAmount);

    const totalPrice = (subTotal + parseFloat(taxAmount)).toFixed(2);
    setAmount('total', totalPrice);
}