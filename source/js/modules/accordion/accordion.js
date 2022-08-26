const boxAcc = Array.from(document.querySelectorAll('.page-footer__accordion-wrapper'));
// console.log(boxAcc);

function handlerClick(e) {
  e.preventDefault();
  let currentBox = e.target.closest('.page-footer__accordion-wrapper');
  // console.log(currentBox);
  let currentContent = e.target.nextElementSibling;
  // console.log(currentContent);
  currentBox.classList.toggle('active');
  if (currentBox.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = '0px';
  }
}

const openAcc = () => {
  boxAcc.forEach((box) => {
    box.addEventListener('click', handlerClick);
  });
};

export {openAcc};
