const professions = ["Engineer", "Doctor", "Economist", "Artist"];
const universities = [
    {
        name: "Harvard University",
        requirements: {
            SAT: 1450,
            IELTS: 7.5,
            GPA: 3.8,
            language: "English",
            earlyDeadline: "2025-10-01",
            finalDeadline: "2025-12-15",
            includes: ["Accommodation", "Healthcare"],
            excludes: ["Travel Expenses"],
            tuition: 50000,
            discount: "Up to 20% based on GPA"
        }
    },
    {
        name: "Cambridge University",
        requirements: {
            SAT: 1400,
            IELTS: 7.0,
            GPA: 3.7,
            language: "English",
            earlyDeadline: "2025-09-15",
            finalDeadline: "2025-11-30",
            includes: ["Accommodation"],
            excludes: ["Healthcare", "Travel"],
            tuition: 48000,
            discount: "Up to 15% based on academic excellence"
        }
    }
];

document.addEventListener("DOMContentLoaded", () => {
    loadProfessions();
});

function loadProfessions() {
    const select = document.getElementById("professionSelect");
    professions.forEach(prof => {
        const option = document.createElement("option");
        option.value = prof;
        option.textContent = prof;
        select.appendChild(option);
    });
}

function setGrantOption(isGrant) {
    const universityList = document.getElementById("universityList");
    universityList.innerHTML = "";

    universities.forEach(uni => {
        const li = document.createElement("li");
        li.textContent = uni.name;
        li.onclick = () => showUniversityDetails(uni, isGrant);
        universityList.appendChild(li);
    });
}

function showUniversityDetails(uni, isGrant) {
    const detailsDiv = document.getElementById("universityDetails");
    const req = uni.requirements;

    detailsDiv.innerHTML = `
        <h3>${uni.name}</h3>
        <p><strong>SAT Required:</strong> ${req.SAT}</p>
        <p><strong>IELTS Required:</strong> ${req.IELTS}</p>
        <p><strong>GPA Required:</strong> ${req.GPA}</p>
        <p><strong>Language:</strong> ${req.language}</p>
        <p><strong>Early Deadline:</strong> ${req.earlyDeadline}</p>
        <p><strong>Final Deadline:</strong> ${req.finalDeadline}</p>
        <p><strong>Includes:</strong> ${req.includes.join(", ")}</p>
        <p><strong>Excludes:</strong> ${req.excludes.join(", ")}</p>
        ${!isGrant ? `<p><strong>Tuition Fee:</strong> $${req.tuition}</p>
        <p><strong>Discounts:</strong> ${req.discount}</p>` : ""}
    `;
}
