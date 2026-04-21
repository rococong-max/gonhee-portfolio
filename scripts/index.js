const portfolioWrap = document.querySelector('.portfolio_swiper');

console.log(portfolioWrap);

const portfolioSwiper = new Swiper(portfolioWrap,{
    direction: 'vertical', 
    slidesPerView: 1,
    mousewheel: true,
    speed: 800,
})