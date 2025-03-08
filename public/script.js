document.getElementById("send-button").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Append user message to chat
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div class="message user-message">${userInput}</div>`;

    try {
        const response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput }),
        });

        const data = await response.json();
        chatBox.innerHTML += `<div class="message bot-message">${data.reply}</div>`;

        document.getElementById("user-input").value = ""; // Clear input
    } catch (error) {
        console.error("Error:", error);
    }
});

