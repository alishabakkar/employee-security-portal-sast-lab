function runReportScript() {
    const src = document.getElementById('reportScript').value.trim();

    // Allow only simple text input for demonstration purposes.
    const result = src === ""
        ? "No report script provided."
        : "Custom script execution has been disabled for security reasons.";

    document.getElementById('reportResult').innerText = result;
}

function evalReport() {
    const expr = document.getElementById('reportEval').value.trim();

    document.getElementById('reportEvalResult').innerText =
        "Expression evaluation has been disabled for security reasons.";
}