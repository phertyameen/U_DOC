let countdown = document.querySelector('#clock_countdown')
let resend_code = document.querySelector('#resend_code')


// function for setting time interval
let initial_countdown = countdown.innerHTML
resend_code.style.display = 'none'

setInterval(e => {
    initial_countdown =  initial_countdown > 0? initial_countdown - 1 : 0

	countdown.innerHTML = initial_countdown
    console.log(initial_countdown)

	// console.log(count_size)

    initial_countdown <= 0 ? resend_code.style.display = 'block': resend_code.style.display = 'none'

}, 1000)

// resend_code.addEventListener('click', setInterval(e))

// signup auth
const axios = require('axios');
const signUpData = {
    username: 'exampleuser',
    password: 'password123',
    // Other registration data
  };
  
  axios.post('https://u-and-doc.onrender.com/api/user/signup', signUpData)
    .then(response => {
      console.log('Sign-up successful:', response.data);
    })
    .catch(error => {
      console.error('Sign-up failed:', error.response.data);
    });