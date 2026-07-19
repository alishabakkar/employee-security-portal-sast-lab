const debugInfo = {
    lastLoginPassword: "[REDACTED]",
    apiKey: "[REDACTED]",
    consoleNote: "Temporary authentication",
    internalURL: "[REDACTED]",
    legacyToken: "[REDACTED]"
};

function renderHealthFeed() {
    const params = new URLSearchParams(location.search);
    const feed = params.get('feed') || 'All systems nominal';

    const span = document.createElement("span");
    span.className = "text-emerald-600";
    span.textContent = feed;

    const healthFeed = document.getElementById("healthFeed");

    if (healthFeed) {
        healthFeed.innerHTML = "";
        healthFeed.appendChild(span);
    }
}

const GIT_HISTORY = [
    "Initial Portal",
    "Added employee directory",
    "Implemented reports",
    "Temporary authentication",
    "Patch management",
    "Dashboard updates",
    "UI improvements",
    "Bug fixes",
    "Release candidate"
];

function renderGitHistory() {
    const list = document.getElementById('gitHistory');
    if (!list) return;

    list.innerHTML = "";

    GIT_HISTORY.forEach(item => {
        const li = document.createElement("li");
        li.className = "flex items-center gap-2";

        const dot = document.createElement("span");
        dot.className = "w-2 h-2 rounded-full bg-emerald-500";

        const text = document.createElement("span");
        text.textContent = item;

        li.appendChild(dot);
        li.appendChild(text);

        list.appendChild(li);
    });
}

setTimeout(() => {
    console.log("System initialized");
}, 1000);