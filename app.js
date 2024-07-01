         /* declaration */
        const trialBtn = document.getElementById('btn-trial')
        const inputBoxes = document.querySelectorAll('.input-box')

        // Initialize error images and messages
        inputBoxes.forEach(inputBox => {
            const wrapper = inputBox.parentNode
            wrapper.style.position = 'relative'

            const errorImage = document.createElement('img')
            errorImage.setAttribute('src', 'images/icon-error.svg')
            errorImage.setAttribute('alt', 'Error Image')
            errorImage.classList.add('error-image')
            wrapper.appendChild(errorImage)

            const errorMsg = document.createElement('p')
            errorMsg.classList.add('error-msg')
            wrapper.appendChild(errorMsg)

            /* event listener to hide error on typing */
            inputBox.addEventListener('input', () => hideError(inputBox))
        })

       
        /* show error function */
        function showError(inputBox, message) {
            const errorImage = inputBox.nextElementSibling
            const errorMsg = errorImage.nextElementSibling

            errorImage.style.display = 'inline'
            errorMsg.textContent = message
            errorMsg.style.display = 'inline'
            inputBox.classList.add('error-input')
            errorMsg.style.marginTop = '45px'
            inputBox.style.marginTop = '20px'
            trialBtn.style.marginTop = '20px'
        }

        /* hide error function */
        function hideError(inputBox) {
            const errorImage = inputBox.nextElementSibling
            const errorMsg = errorImage.nextElementSibling

            errorImage.style.display = 'none'
            errorMsg.style.display = 'none'
            errorMsg.textContent = ''
            inputBox.classList.remove('error-input')
        }

        /* check if inpt is correct or not after submittng form  */
        function checkDetail(e) {
            e.preventDefault()
            inputBoxes.forEach(inputBox => {
                const inputValue = inputBox.value.trim()
                const isEmailField = inputBox.id === 'email-id'
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                if (inputValue === "") {
                    showError(inputBox, `${inputBox.placeholder} cannot be empty`)
                } else if (isEmailField && !emailPattern.test(inputValue)) {
                    showError(inputBox, `Looks like this is not an email.`)
                } else {
                    hideError(inputBox)
                }
            })
        }

        trialBtn.addEventListener('click', checkDetailDetail)






