let success_pw_reset = document.getElementById('#pop_up')
let new_password = document.querySelector('#new_password')
let confirm_password = document.querySelector('#confirm_password')
let reset_pw_btn = document.getElementById('#reset_pw_btn')
let reset_pw_main = document.getElementById('reset_pw_main')

// let required = document.querySelectorAll('input')
// required.innerHTML = required
// console.log(required)

// sign_up_btn.addEventListener('click', (e) =>  {
//     e.preventDefault()
//     const redirectUrl = 'verification_code.html'

//     window.location.href = redirectUrl;
// })

// console.log(success_pw_reset)
// reset_pw_btn.onclick(e => {
//     success_pw_reset.style.display = 'block'
//     reset_pw_main.style.display = 'none'
// })

// user signup authentication

// Get a reference to the form element
const signupform = document.querySelector('#registrationForm');
// console.log(form)

signupform.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Convert FormData to a JSON object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch("https://u-and-doc.onrender.com/api/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                // Handle a successful response here
                console.log("User created successfully");

                const successmessage = document.querySelector('.successmessage')
                const loginbtn = document.querySelector('#loginbtn')
                const sign_up_btn = document.querySelector('.sign_up_btn')
                const footer = document.querySelector('.p_footer')

                // sign_up_btn.addEventListener('click', (e) => {
                    successmessage.style.display = 'block'
                    signupform.style.display = 'none'
                    footer.style.display = 'none'
                // })

                loginbtn.addEventListener('click', (e) => {
                    window.location.href = "log_in.html"
                })
            } else {
                // Handle errors here
                console.error("Error creating user");
            }
        })
        //   .then(data => {
        //     if (data.userId) {
        //         // Registration was successful, and the user ID is available
        //         const userId = data.userId;

        //         // Store the user ID (e.g., in a cookie or session storage) for future use
        //         // Here's an example of how to set it in a session storage:
        //         // sessionStorage.setItem("userId", userId);

        //         // Redirect to the user profile page or perform other actions
        //         // window.location.href = "./user_profile.html";

        //     } else {
        //         // Handle registration errors
        //         console.error("Registration failed");

        //     }
        // })
        .catch((error) => {
            // Handle network errors here
            console.error("Network error:", error);
        });
});

