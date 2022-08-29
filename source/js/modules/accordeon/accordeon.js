// const accordeonEl = Array.from(document.querySelectorAll('.accordeon__header'));


// const openAcc = () => {
//   accordeonEl.forEach(function (section) {
//     section.addEventListener('click', function (evt) {
//       accordeonEl.forEach(function (el) {
//         if (el.classList.contains === 'opened' && el.classList.contains === 'active') {
//           el.classList.remove('opened');
//           el.classList.remove('active');
//         } else {
//           el.classList.add('opened');
//           el.classList.add('active');
//         }
//         // el.classList.toggle('opened');
//         // el.classList.toggle('active');
//         // evt.currentTarget.classList.add('active');
//         // evt.currentTarget.classList.add('opened');
//       });
//       evt.currentTarget.classList.toggle('active');
//       evt.currentTarget.classList.toggle('opened');
//     });
//   });
// };

const accordeons = document.querySelectorAll('.accordeon__header');

function hendler() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    for (const el of accordeons) {
      el.classList.remove('active');
    }
    this.classList.add('active');
  }
}

const openAcc = () => {
  for (const item of accordeons) {
    // console.log(item);
    item.addEventListener('click', hendler);
  }
};

export {openAcc};
