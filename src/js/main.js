window.addEventListener("DOMContentLoaded", () => {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    if (phoneInputs.length > 0) {
        const maskOptions = {
            mask: "+{380}-000-000-000",
        };
        phoneInputs.forEach((input) => {
            IMask(input, maskOptions);
        })
    }

    const btnPrev = document.querySelector(".button-prev");
    const btnNext = document.querySelector(".button-next");
    const swiper = new Swiper(".swiper", {
        // slidesPerView: 4,
        spaceBetween: 24,
        breakpoints: {
            1366: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
    });
    btnNext.addEventListener("click", () => {
        swiper.slideNext();
    });
    btnPrev.addEventListener("click", () => {
        swiper.slidePrev();
    });
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
        const trigger = item.querySelector(".accordion-trigger");
        trigger.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
    const burger = document.querySelector(".mdi-menu");
    const menu = document.querySelector(".menu");
    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    const tgForm = document.getElementById("tgForm");
    const TOKEN = "8215513895:AAH1TPKJE0eUWDhvEzi7Y_e5IzN7cv3XGt8";
    const CHAT_ID = "-1002727283828";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const formBlock = document.getElementById("formBlock");
    const successBlock = document.getElementById("successBlock");

    tgForm.addEventListener("submit", (e) => {
        e.preventDefault(); // чтобы страница не перезагружалась

        const formData = new FormData(tgForm);
        let message = "<b>Новая заявка с сайта:</b>\n\n";

        formData.forEach((value, key) => {
            message += `${key}: ${value}\n`;
        });

        fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: "html",
            }),
        })
            .then((res) => res.json())
            .then(() => {
                tgForm.reset();
                formBlock.classList.add("hide");
                successBlock.classList.remove("hide").add("show");
            })
            .catch((err) => console.error("Ошибка:", err));
    });
});
