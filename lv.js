const warpper =   document.querySelector('.warpper');

const question = document.querySelector('.question');

const yesBtn = document.querySelector('.yes-btn');

const noBtn = document.querySelector('.no-btn');

const warpperRect = warpper.getBoundingClientRect();

const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
  question.innerHTML = 'Love U Too!!!';
});

noBtn.addEventListener('click', () => {
  const i = Math.floor(Math.random() * (warpperRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (warpperRect.height - noBtnRect.height)) + 1;
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px'; });

  