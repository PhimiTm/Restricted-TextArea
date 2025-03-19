const textarea = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLength = 250;

textarea.addEventListener("input", function () {
    let textLength = textarea.value.length;
    charCount.textContent = `${textLength} / ${maxLength}`;

    if (textLength >= maxLength) {
        textarea.classList.add("limit-reached");
    } else {
        textarea.classList.remove("limit-reached");
    }
});
