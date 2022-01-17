(function () {
    //pridobitev elementa input
    const elementSir = document.querySelector('#G')
    const elementMadam = document.querySelector('#Ga')
    const elementName = document.querySelector('#input__name')
    const elementSurname = document.querySelector('#input__surname')

    //pridobitev vrednosti elementa, ce je null vrne false
    let sir = elementSir ? elementSir.getAttribute('value') : false
    let madam = elementMadam ? elementMadam.getAttribute('value') : false

    //pridobitev vrednosti elementa, ko kliknemo nanj
    //ce ni false se izvede eventListener
    if (sir) {
        elementSir.addEventListener('click', function () {
            //spremenimo placeholder ce je gospod
            elementName.placeholder = "g. Ime"

            //z klikom na input kjer vneses ime doda izbrano vrednost spola
            elementName.addEventListener('click', function () {
                elementName.value = "g. "
                
            })
        })
    } else {
        return
    }
    if (madam) {
        elementMadam.addEventListener('click', function () {
            //spremenimo placeholder ce je gospa
            elementName.placeholder = "ga. Ime"

            //z klikom na input kjer vneses ime doda izbrano vrednost spola
            elementName.addEventListener('click', function () {
                elementName.value = "ga. "
            })
        })
    } else {
        return
    }

})()