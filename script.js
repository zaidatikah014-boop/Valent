const text = `
سارة…
لم تُكتب هذه الكلمات لتكون رسالة عابرة،
بل لتكون حقيقة هادئة لا تزول.

وجودكِ ليس تفصيلاً في حياتي،
أنتِ الأمان حين يضيق كل شيء،
وأنتِ الفرح الذي يأتي دون موعد.

معكِ، تصبح اللحظات البسيطة ذاكرة،
وتتحوّل الأيام العادية إلى شيء يُشتاق إليه.

هذا ليس Valentine فقط…
هذا اعتراف صادق،
بأن قلبي اختاركِ دون تردّد.
`;

let index = 0;
const speed = 45;
const writer = document.getElementById("typewriter");

function typeEffect() {
  if (index < text.length) {
    writer.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

function startLove() {
  const card = document.getElementById("card");
  card.classList.remove("closed");
  card.classList.add("open");

  document.getElementById("music").play();

  setTimeout(() => {
    typeEffect();
  }, 800);
}

/* قلوب كبيرة */
const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (40 + Math.random() * 40) + "px";
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heart.style.opacity = 0.9;

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);
