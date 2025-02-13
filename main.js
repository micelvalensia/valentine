function createHeart() {
    const content = document.querySelector("main");
    let e = document.createElement("div");
    e.classList.add("drop");
    content.appendChild(e);
    let left = Math.floor(Math.random() * 2000);
    let duration = Math.random() * 1;

    e.style.left = left + "px";
    e.style.animationDuration = 1 + duration + "s";

    setTimeout(() => {
        content.removeChild(e)
    }, 2000)
}

setInterval(createHeart, 70);


function content() {
    const content1 = document.querySelector(".content-1");
    const content2 = document.querySelector(".content-2");

    content1.classList.add("gone")
    content2.classList.add("gone")

    setTimeout(() => {
        content1.style.display = "none";
        content2.style.display = "flex";
    }, 2000)

}

const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
    }
);
