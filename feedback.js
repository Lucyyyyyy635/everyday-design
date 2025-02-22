document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const feedbackList = document.getElementById("feedback-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const feedbackInput = document.getElementById("feedback");
        const feedbackText = feedbackInput.value.trim();
        
        if (feedbackText) {
            const listItem = document.createElement("li");
            listItem.textContent = feedbackText;
            feedbackList.appendChild(listItem);
            feedbackInput.value = ""; // 清空输入框
        }
    });
});
