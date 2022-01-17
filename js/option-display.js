(function () {
    const elementSelect = document.querySelector('#options')
    const elementReasonBox = document.querySelector('#reason-box')
    const elementCheckRadioBox = document.querySelector('#check-radio-box')

    elementSelect.addEventListener('click', function () {
        elementSelect.addEventListener('change', function () {
            
            const selectedValue = elementSelect.value

            switch (selectedValue) {
                case 'option1':
                    elementCheckRadioBox.style.display = 'none'
                    elementReasonBox.style.display = 'flex'
                    elementReasonBox.style.animation = 'fade-in 1s'
                    break
                case 'option2':
                    elementReasonBox.style.display = 'none'
                    elementCheckRadioBox.style.display = 'flex'
                    elementCheckRadioBox.style.animation = 'fade-in 1s'
                    break
                default:
                    elementReasonBox.style.display = 'none'
                    elementCheckRadioBox.style.display = 'none'
            }

            // if (selectedValue == "option1") {
            //     elementCheckRadioBox.style.display = 'none'
            //     elementReasonBox.style.display = 'flex'
            // } else if (selectedValue == "option2") {
            //     elementReasonBox.style.display = 'none'
            //     elementCheckRadioBox.style.display = 'flex'
            // }
        })
    })
})()