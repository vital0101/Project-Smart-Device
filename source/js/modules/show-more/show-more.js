const dropDownText = document.querySelector('.about-company__drop-down');
const btnDropDown = document.querySelector('.about-company__drop-down-btn');

// dropDownText.classList.add('is-hidden');

const clickHandler = () => {
  dropDownText.classList.toggle('show-more');
  if (btnDropDown.textContent === 'Подробнее') {
    btnDropDown.textContent = 'Свернуть';
    dropDownText.style.heigth = '100%';
  } else if (btnDropDown.textContent === 'Свернуть') {
    btnDropDown.textContent = 'Подробнее';
  }
};

const showMore = () => {
  btnDropDown.addEventListener('click', clickHandler);
};

export {showMore};
