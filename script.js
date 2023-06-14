'use strict';
const modal = document.querySelectorAll('.modal');
//modal[0] modal[2]
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // by default only first one get selector so we use quesrySelctorAll
// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
//   // modal.style.display = 'block'; we can also use like for our example .. for same example we need to specify all other class propety with a value which is a huge stuff
// };

// const closeModal = function () {
//   modal[e].classList.add('hidden');
//   overlay.classList.add('hidden');
//   //   modal.style.display = 'none';
// };

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log(i);
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  btnCloseModal[i].addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }); //closemodal() no , closemodal yeswe  want close modal to execute when only when click event happen...
  overlay.addEventListener('click', function () {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });

  //keypress - keep on pressing untilwe keep pressing..
  //keyup - when we release a key
  //key down - when we press a key..

  // document.addEventListener('keydown', function () {
  //   console.log('key pressed');
  // });
  document.addEventListener('keydown', function (e) {
    //   console.log(e.key); op k a escape we pressed keys
    //console.log(e) op escape key detail , k detail  detail we pressed
    //   if (e.key === 'Escape') {
    //     console.log('esc was pressed');
    //   }
    //   if (e.key === 'Escape') {
    //     if (!modal.classList.contains('hidden')) {
    //       // when the modal doesnt not contain hidden we want it back so we add close model function which basicaly adds hidden class for overlay and modal
    //       closeModal();
    //     }
    //   }
    if (e.key === 'Escape' && !modal[i].classList.contains('hidden')) {
      // when the modal doesnt not contain hidden we want it back so we add close model function which basicaly adds hidden class for overlay and modal

      modal[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}
