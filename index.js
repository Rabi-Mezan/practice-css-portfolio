// =====================================
// tabled button functionality 
// =====================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((current) => {
        current.classList.add('p-image-not-active')
    })

    img_active.forEach((current) => {
        current.classList.remove("p-image-not-active")
    })

})


// =====================================
// swiper functionality 
// =====================================

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});