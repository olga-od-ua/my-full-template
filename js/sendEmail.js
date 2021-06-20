function sendMail(contactForm) {
    emailjs.send("service_r0g6ngj", "template_ddggyvm", {
"user_email": contactForm.email.value,
"user_name": contactForm.name.value,
"the_gift_of_the_gab_message": contactForm.message.value
    })
    .then(
        function clearForm() {
            document.getElementById("myForm").reset();
         }
    )
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
    return false;
}
