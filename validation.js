// validation script here
const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^[0-9]{11}$/, // 11 numbers and must start by number (^) and end after 11 ($)
    username: /^[a-z\d]{5,12}$/i, // 5 to 12 characters case insensitive (i) \d is the same as [0-9]
    password: /^[\w@-]{8,20}$/, // \w is the same as [a-z0-9] and then special characters @-_
    slug: /^[a-z\d-]{8,20}$/,
    // When we have several independently parts to validate we use (). 
    // First part accepts dot and hyphen also. + means at least one char long but as long as you want to.
    // Second part after the mandatory @ accepts hyphen
    // Third part after the mandatory dot is between 2 and 8 chars long
    // fourth part is optional (?) and like the third part is exists the dot is mandatory and between 2 and 8 chars long
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ 
}

// validation function
function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        //console.log(event.target.attributes.name.value)
        validate(event.target, patterns[event.target.attributes.name.value])
    })
})