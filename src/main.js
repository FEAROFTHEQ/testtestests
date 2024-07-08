// import './js/about';
// import './js/projects';
// import './js/faq';
// import './js/reviews';
// import './js/footer';
// import './js/header-modal';

const scroller = document.querySelector(".marquee");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
    console.log("HEREFDSFSDF");
}
function addAnimation(){
    scroller.setAttribute('data-animated', true);
    const scrollerInner = scroller.querySelectorAll(".marquee-inner");
    const scrollerInnerArray =  Array.from(scrollerInner);
    scrollerInnerArray.forEach((scroller) =>{
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach(item => {
            const duplItem = item.cloneNode(true);
            duplItem.setAttribute('aria-hidden', true);
            scroller.classList.add('duplicated');
            scroller.appendChild(duplItem);
            console.log(duplItem);
        });
    });
    // const scrollerInner = scroller.querySelector(".marquee-inner");
    // const scrollerContent = Array.from(scrollerInner.children);
    // scrollerContent.forEach(item => {
    //     const duplItem = item.cloneNode(true);
    //     duplItem.setAttribute('aria-hidden', true);
    //     scrollerInner.appendChild(duplItem);
    //     console.log(duplItem);
    // })
}
