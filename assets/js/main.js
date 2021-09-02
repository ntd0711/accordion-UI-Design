// const headerSections = document.querySelectorAll('.accordion__header');

// function toggleContent(i) {
//     const contentSections = document.querySelectorAll('.accordion__content');
//     const openItem = document.querySelector('.accordion-open');

//     if (openItem) {
//         headerSections.forEach((item) => item.classList.remove('accordion-open'));
//         contentSections.forEach((item) => item.removeAttribute('style'));
//     }

//     if (headerSections[i].classList.contains('accordion-open')) {
//         headerSections[i].classList.remove('accordion-open');
//         contentSections[i].removeAttribute('style');
//     } else {
//         headerSections[i].classList.add('accordion-open');
//         contentSections[i].style.height = contentSections[i].scrollHeight + 'px';
//     }
// }
// headerSections.forEach((item, i) => {
//     item.addEventListener('click', function () {
//         toggleContent(i);
//     });
// });

const accordionItem = document.querySelectorAll('.accordion__item');

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
        toggleItem(item);
    });
});

const toggleItem = (item) => {
    // const accordionHeader = item.querySelector('.accordion__header');
    const accordionContent = item.querySelector('.accordion__content');

    if (item.classList.contains('accordion-open')) {
        item.classList.remove('accordion-open');
        accordionContent.removeAttribute('style');
    } else {
        item.classList.add('accordion-open');
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
    }
    // console.log(accordionHeader);
    // console.log(accordionContent);
};
