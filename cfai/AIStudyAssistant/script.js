// =========================
// AI STUDY ASSISTANT
// =========================

// Notes Summarizer

function generateSummary() {
    const notes = document.getElementById("notesInput").value;
    const output = document.getElementById("summaryOutput");

    if (notes.trim() === "") {
        output.innerHTML = "Please enter some notes.";
        return;
    }

    let words = notes.split(" ");
    let summary = words.slice(0, 30).join(" ");

    output.innerHTML =
        "<h3>Summary</h3><p>" +
        summary +
        "...</p>";
}

// =========================
// Quiz Generator
// =========================

function generateQuiz() {

    const quizArea = document.getElementById("quizArea");

    quizArea.innerHTML = `
    <h3>Quiz Generated</h3>

    <p><b>1. What does AI stand for?</b></p>

    <input type="radio" name="q1" value="A">
    Artificial Intelligence<br>

    <input type="radio" name="q1" value="B">
    Automated Internet<br><br>

    <button onclick="checkQuiz()">
    Submit Quiz
    </button>

    <div id="result"></div>
    `;
}

function checkQuiz() {

    const answer =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    const result =
        document.getElementById("result");

    if (!answer) {
        result.innerHTML =
            "<p>Please select an answer.</p>";
        return;
    }

    if (answer.value === "A") {
        result.innerHTML =
            "<h3>✅ Correct Answer!</h3>";
    } else {
        result.innerHTML =
            "<h3>❌ Wrong Answer!</h3>";
    }
}

// =========================
// AI CHATBOT
// =========================

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const chatBox =
        document.getElementById("chatBox");

    let message = input.value;

    if (message.trim() === "") return;

    chatBox.innerHTML += `
    <p><b>You:</b> ${message}</p>
    `;

    let reply = "";

    if (
        message.toLowerCase().includes("ai")
    ) {
        reply =
            "AI stands for Artificial Intelligence.";
    }

    else if (
        message.toLowerCase().includes("ml")
    ) {
        reply =
            "Machine Learning is a branch of AI.";
    }

    else if (
        message.toLowerCase().includes("python")
    ) {
        reply =
            "Python is a popular programming language for AI.";
    }

    else {
        reply =
            "I am still learning. Please ask another question.";
    }

    chatBox.innerHTML += `
    <p><b>Bot:</b> ${reply}</p>
    `;

    input.value = "";

    chatBox.scrollTop =
        chatBox.scrollHeight;
}

// =========================
// Contact Form
// =========================

function sendContact() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const msg =
        document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        msg === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    alert(
        "Message sent successfully!"
    );

    document
        .getElementById("contactForm")
        .reset();
}

// =========================
// Dashboard Animation
// =========================

window.onload = () => {

    let stats =
        document.querySelectorAll(".stat h2");

    stats.forEach((stat) => {

        let target =
            parseInt(stat.innerText);

        let count = 0;

        let interval =
            setInterval(() => {

            count++;

            stat.innerText = count;

            if (count >= target) {
                clearInterval(interval);

                if (
                    stat.parentElement
                    .innerText
                    .includes("%")
                ) {
                    stat.innerText =
                        target + "%";
                }
            }

        }, 30);

    });

};