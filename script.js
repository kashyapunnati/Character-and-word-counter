const textInput = document.getElementById("textInput");

const characterCount = document.getElementById("characterCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

function updateCounts() {

    const text = textInput.value;

    characterCount.textContent = text.length;

    const trimmedText = text.trim();

    if (trimmedText === "") {
        wordCount.textContent = 0;
    } else {
        const words = trimmedText.split(/\s+/);
        wordCount.textContent = words.length;
    }

    if (trimmedText === "") {
        sentenceCount.textContent = 0;
    } else {
        const sentences = trimmedText
            .split(/[.!?]+/)
            .filter(sentence => sentence.trim() !== "");

        sentenceCount.textContent = sentences.length;
    }
}

textInput.addEventListener("input", updateCounts);

updateCounts();