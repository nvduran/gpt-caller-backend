const WebSocket = require("ws");

function connectWebSocket() {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
                console.log("Connected to WebSocket server");
                ws.send("Hello Server!");
        };

        ws.onmessage = (event) => {
                console.log("Received:", event.data);
        };

        ws.onclose = () => {
                console.log("Disconnected from WebSocket server");
        };

        ws.onerror = (error) => {
                console.error("WebSocket error:", error);
        };
}

connectWebSocket();
