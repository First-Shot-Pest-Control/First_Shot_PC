const generalSpray = document.getElementById("generalButton");
generalSpray.addEventListener("click", () => {
    const generalArrow = document.getElementById("generalArrow");
    const serviceInfo = generalSpray.nextElementSibling;
    serviceInfo.classList.toggle("show");
    generalArrow.classList.toggle("rotate");
})

const rodentSpray = document.getElementById("rodentButton");
rodentSpray.addEventListener("click", () => {
    const rodentArrow = document.getElementById("rodentArrow");
    const serviceInfo = rodentSpray.nextElementSibling;
    serviceInfo.classList.toggle("show");
    rodentArrow.classList.toggle("rotate");
})

const treeSpray = document.getElementById("treeButton");
treeSpray.addEventListener("click", () => {
    const treeArrow = document.getElementById("treeArrow");
    const serviceInfo = treeSpray.nextElementSibling;
    serviceInfo.classList.toggle("show");
    treeArrow.classList.toggle("rotate");
})