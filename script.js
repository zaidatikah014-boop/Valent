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

/* قلوب كبيرة */
const hearts = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";

  // حجم كبير
  heart.style.fontSize = (40 + Math.random() * 40) + "px";

  // حركة أبطأ وأنعم
  heart.style.animationDuration = (6 + Math.random() * 4) + "s";
  heart.style.opacity = 0.9;

  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 500);
