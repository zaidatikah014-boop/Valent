function closeMessage() {
    document.getElementById("loveMessage").style.display = "none";
}

// إنشاء قلوب متحركة
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);
