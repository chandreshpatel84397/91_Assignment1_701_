function chatbot(question) {
    const q = question.toLowerCase();

    if (q.includes("course")) {
        return "MSc IT";
    } else if (q.includes("college")) {
        return "JP Dawar Institute";
    } else if (q.includes("university")) {
        return "Veer Narmad South Gujarat University";
    } else if (q.includes("fees") || q.includes("fee")) {
        return "Fees are approximately Rs. 30,000 per year.";
    } else {
        return "Sorry! I don't know the answer.";
    }
}

module.exports = chatbot;