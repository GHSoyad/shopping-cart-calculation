
/*----- Product phone -----*/
document.getElementById('phone-plus').addEventListener('click', function () {

    const phoneUpdatedNumber = productAmount(true, 'phone-number');

    const btnMinus = document.getElementById('phone-minus');
    btnMinus.removeAttribute('disabled');
})

document.getElementById('phone-minus').addEventListener('click', function () {

    const phoneUpdatedNumber = productAmount(false, 'phone-number');

    if (phoneUpdatedNumber == 0) {
        this.setAttribute('disabled', true);
    }
})


/*----- Product case -----*/
document.getElementById('case-plus').addEventListener('click', function () {

    const caseUpdatedNumber = productAmount(true, 'case-number');

    const btnMinus = document.getElementById('case-minus');
    btnMinus.removeAttribute('disabled');
})

document.getElementById('case-minus').addEventListener('click', function () {

    const caseUpdatedNumber = productAmount(false, 'case-number');

    if (caseUpdatedNumber == 0) {
        this.setAttribute('disabled', true);
    }
})
