
const curses = document.querySelectorAll(".card");

for (let curse of curses) {
    curse.addEventListener("click", function() {
        const urlID = curse.getAttribute("curseName");

        window.location.href = `/courses/${urlID}`
    });
};
