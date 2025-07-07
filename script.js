// Toggle chatbot visibility
function toggleChat() {
    const bot = document.querySelector('.chatbot');
    bot.classList.toggle('hidden');
}

// Handle user input
const input = document.getElementById('chat-input');
const chatBox = document.querySelector('.chat-messages');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input.value.trim() !== "") {
        let userMsg = input.value.trim();
        appendMessage("You", userMsg);
        input.value = "";

        setTimeout(() => {
            botReply(userMsg);
        }, 600);
    }
});

// Append message (for user)
function appendMessage(sender, message) {
    const msgDiv = document.createElement('div');
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    msgDiv.classList.add('fade-in');
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot reply logic with typing animation
function botReply(msg) {
    msg = msg.toLowerCase();
    let reply = "";

    if (msg.includes("hello") || msg.includes("hi")) {
        reply = "Hello! 👋 Nice to connect with you. How can I assist?";
    } else if (msg.includes("project")) {
        reply = "Sure, please check out the Projects section above. I enjoy building intuitive web solutions.";
    } else if (msg.includes("skills") || msg.includes("tech")) {
        reply = "I primarily focus on core CS concepts like DSA, OS, DBMS, and also work with HTML, CSS, JS.";
    } else if (msg.includes("linkedin")) {
        reply = "Here's my LinkedIn: <a href='https://linkedin.com/in/ashutosh-shukla-21385426a' target='_blank'>Visit LinkedIn</a>";
    } else if (msg.includes("github")) {
        reply = "Here's my GitHub: <a href='https://github.com/Ashutosh222006' target='_blank'>GitHub Profile</a>";
    } else if (msg.includes("email")) {
        reply = "You can always drop an email at as1064718@gmail.com.";
    } else if (msg.includes("who are you")) {
        reply = "I'm a small assistant bot designed to help you navigate Ashutosh's portfolio.";
    } else if (msg.includes("hobbies") || msg.includes("chess")) {
        reply = "Apart from tech, I enjoy chess (1000+ rating on chess.com) and simplifying concepts for students.";
    } else if (msg.includes("thank")) {
        reply = "You're welcome! Glad to assist.";
    } else if (msg.includes("bye")) {
        reply = "Goodbye! Feel free to explore the rest of the site.";
    } else {
        const neutralReplies = [
            "That's interesting. Let me know if you want to know about projects, skills or contact info.",
            "Thanks for reaching out. I can share details about skills, certifications or how to connect.",
            "Appreciate your message. Feel free to ask about my work or links to profiles.",
            "Happy to assist! Try asking about projects, skills or how to get in touch."
        ];
        reply = neutralReplies[Math.floor(Math.random() * neutralReplies.length)];
    }

    simulateTyping(reply);
}

// Typing animation
function simulateTyping(text) {
    const typingDiv = document.createElement('div');
    typingDiv.innerHTML = `<strong>Bot:</strong> <span class="typed-text"></span>`;
    typingDiv.classList.add('fade-in');
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    const typedSpan = typingDiv.querySelector('.typed-text');
    let index = 0;

    let typingInterval = setInterval(() => {
        typedSpan.innerHTML += text.charAt(index);
        index++;
        chatBox.scrollTop = chatBox.scrollHeight;
        if (index >= text.length) {
            clearInterval(typingInterval);
        }
    }, 30); // typing speed
}
