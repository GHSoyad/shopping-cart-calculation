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