// 'use strict';

// const slider = () => {
//     const widthWindow = document.documentElement.clientWidth;
//     if(widthWindow <= 425) {
//         const slides = document.querySelectorAll('.about-item');
//         let count = 0;
//         const autoPlaySlide = () => { 
//             if (count > 1) {
//                 count = 0;
//             }
//             slides.forEach((item, i) => {
//                 if (i === count) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//             count ++;
//             };
//         const startSlide = (time = 2000) => {
//             setInterval(autoPlaySlide, time);   
//         };
//         startSlide();
//     }
// };
// slider();

// const footerUp = () => {
//     const footerUpBtn = document.querySelector('.footer__up');
//     const header = document.querySelector('.header');
//     let	topElem;
//     window.addEventListener('scroll', () => {

//        topElem = header.getBoundingClientRect().top;

// 		if (topElem < -650) {
//             console.log(1);
// 			footerUpBtn.style.display = 'flex';
// 		} else {
//             footerUpBtn.style.display = 'none';
//         }
// 	});
// };
// footerUp();

// const paintTheDot = () => {
//     const anchors = document.querySelectorAll('.anchor > a');
//     const checkClass = (e) => {
//         anchors.forEach(item => {
//             if (item.getAttribute('href') !== e.target.getAttribute('href')) {
//                 item.classList.remove('anchor-active');
//             }
//         });
//     };
//     anchors.forEach(item => {
//         item.addEventListener('click', (e) => {
//             item.classList.add('anchor-active');
//             checkClass(e);
//         });
//     });
// };
// paintTheDot();


// const openPopup = () => {
//     const navBurger = document.querySelector('.nav__burger');
//     const popup = document.querySelector('.popup');
//     const close = document.querySelector('.popup__item > button');

//     navBurger.addEventListener('click', () => {
//         popup.style.display = 'block';
//     });
//     close.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });
// };
// openPopup();