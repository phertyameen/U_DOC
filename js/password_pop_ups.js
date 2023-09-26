let success_pw_reset = document.getElementById('#pop_up')
let new_password = document.querySelector('#new_password')
let confirm_password = document.querySelector('#confirm_password')
let reset_pw_btn = document.getElementById('#reset_pw_btn')
let reset_pw_main = document.getElementById('reset_pw_main')

// let required = document.querySelectorAll('input')
// required.innerHTML = required
// console.log(required)

let sign_up_btn = document.querySelector('.sign_up_btn')
// console.log(sign_up_btn)

sign_up_btn.addEventListener('click', (e) =>  {
    e.preventDefault()
    const redirectUrl = 'verification_code.html'

    window.location.href = redirectUrl;
})

// console.log(success_pw_reset)
// reset_pw_btn.onclick(e => {
//     success_pw_reset.style.display = 'block'
//     reset_pw_main.style.display = 'none'
// })
    