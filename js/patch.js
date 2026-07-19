function renderPatches() {
    const wrap = document.getElementById('patchList');
    wrap.innerHTML = "";

    PATCHES.forEach(p => {
        const card = document.createElement("div");
        card.className = "bg-white p-4 rounded shadow";

        const id = document.createElement("div");
        id.className = "font-semibold";
        id.textContent = p.id;

        const system = document.createElement("div");
        system.textContent = p.system;

        const version = document.createElement("div");
        version.textContent = "Version: " + p.version;

        const schedule = document.createElement("div");
        schedule.textContent = "Schedule: " + p.schedule;

        const status = document.createElement("div");
        status.textContent = "Status: " + p.status;

        card.appendChild(id);
        card.appendChild(system);
        card.appendChild(version);
        card.appendChild(schedule);
        card.appendChild(status);

        wrap.appendChild(card);
    });

    setInterval(() => {
        console.log("Patch heartbeat");
    }, 10000);
}

function broadcastPatchNote() {
    const note = document.getElementById('patchNote').value;
    document.getElementById('patchBroadcast').textContent = note;
}