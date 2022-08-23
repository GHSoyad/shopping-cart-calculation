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