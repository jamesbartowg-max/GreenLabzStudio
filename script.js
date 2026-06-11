function scrollToAudit() {
    document.getElementById("audit").scrollIntoView({ behavior: "smooth" });
}

function startAudit() {
    const urlInput = document.getElementById("url-input").value;
    if (!urlInput) {
        alert("Bitte gib eine URL ein.");
        return;
    }

    document.getElementById("start").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    let progress = 0;
    const loadingText = document.getElementById("loadingText");
    const steps = [
        "Analysiere Server-Antwort...",
        "Prüfe Meta-Tags & SEO...",
        "Scanne mobile Layout-Fehler...",
        "Berechne Conversion-Score..."
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 12;
        if (progress > 100) progress = 100;

        document.getElementById("progress").style.width = progress + "%";

        // Text-Update basierend auf Fortschritt
        if (progress > (stepIndex + 1) * 25 && stepIndex < steps.length) {
            loadingText.innerText = steps[stepIndex];
            stepIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(showResult, 600);
        }
    }, 250);
}

function showResult() {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    const targetScore = Math.floor(Math.random() * 25) + 35; // Generiert Score zwischen 35-60
    animateScore(targetScore);
}

function animateScore(target) {
    let current = 0;
    const scoreElement = document.getElementById("score");
    const duration = 1500; 
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            scoreElement.innerText = Math.round(target);
            clearInterval(timer);
        } else {
            scoreElement.innerText = Math.round(current);
        }
    }, 16);
}