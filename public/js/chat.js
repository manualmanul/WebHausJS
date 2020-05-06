var socket = io("http://localhost:3000");
const chatForm = document.getElementById("sendForm");

appendMessage = (nickname, message, type = "user", timestamp = new Date()) => {
    const messageEl = document.createElement("li");
    messageEl.className = `${type}`
    messageEl.appendChild(document.createTextNode(`[${timestamp}] ${nickname}: ${message}`))
    messages.appendChild(messageEl);
}

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("chat message", {message: chatForm["sendField"].value});
    chatForm["sendField"].value = "";
    return false;
});

socket.on("new message", (data) => appendMessage(data.nickname, data.message, data.type, data.timestamp))

socket.on("shutdown", (data) => {
    socket.disconnect()
    alert(data.message)
    window.location = "/"
});