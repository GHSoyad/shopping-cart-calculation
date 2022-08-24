const phonePrice = 1219;
const casePrice = 59;

/*----- Product phone -----*/
document.getElementById('phone-plus').addEventListener('click', function () {

    const phoneUpdatedNumber = productAmount(true, 'phone-number');

    calculateProductPrice('phone-total', phonePrice, phoneUpdatedNumber);

    const btnMinus = document.getElementById('phone-minus');
    btnMinus.removeAttribute('disabled');
})

document.getElementById('phone-minus').addEventListener('click', function () {

    const phoneUpdatedNumber = productAmount(false, 'phone-number');


    calculateProductPrice('phone-total', phonePrice, phoneUpdatedNumber);

    if (phoneUpdatedNumber == 0) {
        this.setAttribute('disabled', true);
    }
})


/*----- Product case -----*/
document.getElementById('case-plus').addEventListener('click', function () {

    const caseUpdatedNumber = productAmount(true, 'case-number');

    calculateProductPrice('case-total', casePrice, caseUpdatedNumber);

    const btnMinus = document.getElementById('case-minus');
    btnMinus.removeAttribute('disabled');
})

document.getElementById('case-minus').addEventListener('click', function () {

    const caseUpdatedNumber = productAmount(false, 'case-number');

    calculateProductPrice('case-total', casePrice, caseUpdatedNumber);

    if (caseUpdatedNumber == 0) {
        this.setAttribute('disabled', true);
    }
})