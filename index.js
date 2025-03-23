document.addEventListener("DOMContentLoaded", function () {
    console.log("Travel Agent Portal Loaded!");

    // Registration Form
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Registration successful!");
    });

    // Login Form
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login successful!");
        document.getElementById("user-name").innerText = "Agent";
    });

    // Deal Submission
    document.getElementById("dealForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let title = this.querySelector("input[type='text']").value;
        let description = this.querySelector("textarea").value;
        let dealList = document.getElementById("dealList");

        let dealItem = document.createElement("div");
        dealItem.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
        dealList.appendChild(dealItem);
    });

    // Messaging System
    document.getElementById("sendMessage").addEventListener("click", function () {
        let messageBox = document.getElementById("messageBox");
        let messageList = document.getElementById("messageList");

        if (messageBox.value.trim() !== "") {
            let msg = document.createElement("p");
            msg.textContent = messageBox.value;
            messageList.appendChild(msg);
            messageBox.value = "";
        }
    });
});
