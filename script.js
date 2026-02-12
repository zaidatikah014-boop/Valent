const text = `
سارة…
لم أكتب هذه الكلمات لأملأ فراغًا،
بل لأقول حقيقة لا تتغيّر.

وجودك ليس تفصيلاً،
أنتِ الطمأنينة حين يضيق العالم،
والجمال الذي لا يحتاج إلى تفسير.

معكِ، الأشياء البسيطة تصبح عميقة،
والأيام العادية تتحوّل إلى ذاكرة.

هذا ليس Valentine فقط…
هذا اعتراف هادئ،
بأن قلبي اختاركِ دون تردد.
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
  document.getElementById("music").play();
  typeEffect();
}

/* قلوب */
const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (14 + Math.random() * 22) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 350);
