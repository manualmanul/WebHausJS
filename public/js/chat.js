var socket = io("http://localhost:3000");
const chatForm = document.getElementById("sendForm");

window.onload = () => {
    let nickname = new URL(window.location.href).searchParams.get("nickname");
    nickname = nickname === null ? `HausUser${Math.floor(Math.random() * 10000)}` : nickname;
    socket.emit("join", {nickname: nickname})
}

const appendMessage = (message, type) => {
    const messageEl = document.createElement("li");
    messageEl.className = `${type}`;
    messageEl.appendChild(
        document.createTextNode(`[${moment().format("HH:mm")}] ${message}`)
    );
    messageList.appendChild(messageEl);
};

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    socket.emit("chat message", { message: chatForm["sendField"].value });
    chatForm["sendField"].value = "";
    return false;
});

socket.on("new message", (data) =>
    appendMessage(data.message, data.type)
);

// Shut down cleanly upon server shutdown message
socket.on("shutdown", (data) => {
    socket.disconnect();
    alert(data.message);
    window.location = "/";
});
