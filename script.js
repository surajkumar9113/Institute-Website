const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {
        statusText.innerText = "Please fill all fields!";
        statusText.style.color = "red";
        return;
    }

    statusText.innerText = "Message sent successfully!";
    statusText.style.color = "#38bdf8";

    form.reset();
});
