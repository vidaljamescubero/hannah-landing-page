const nav1Desktop = document.querySelectorAll(".hbl-block-2-nav-desktop-1")
const nav2Desktop = document.querySelectorAll(".hbl-block-2-nav-desktop-2")
const nav3Desktop = document.querySelectorAll(".hbl-block-2-nav-desktop-3")
const nav1Mobile = document.querySelector(".hbl-block-2-mobile-1")
const nav2Mobile = document.querySelector(".hbl-block-2-mobile-2")
const nav3Mobile = document.querySelector(".hbl-block-2-mobile-3")

for (let x = 0; x < 3; x++) {
    nav1Desktop[x].addEventListener('click', function (e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 50;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    })
    nav2Desktop[x].addEventListener('click', function (e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 50;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    })
    nav3Desktop[x].addEventListener('click', function (e) {
        e.preventDefault();
        let hash = this.getAttribute('href');
        let target = document.querySelector(hash);
        let headerOffset = 50;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    })
}

nav1Mobile.addEventListener('click', function (e) {
    e.preventDefault();
    let hash = this.getAttribute('href');
    let target = document.querySelector(hash);
    let headerOffset = 50;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
})

nav2Mobile.addEventListener('click', function (e) {
    e.preventDefault();
    let hash = this.getAttribute('href');
    let target = document.querySelector(hash);
    let headerOffset = 50;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
})

nav3Mobile.addEventListener('click', function (e) {
    e.preventDefault();
    let hash = this.getAttribute('href');
    let target = document.querySelector(hash);
    let headerOffset = 50;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
})

const block2Container = document.querySelector(".hbl-block-2-part1-container");
const block2 = document.querySelector(".hbl-block-2-part1-content");
const block2Container2 = document.querySelector(".hbl-block-2-part2-container");
const block22 = document.querySelector(".hbl-block-2-part2-content");
const block2Container3 = document.querySelector(".hbl-block-2-part3-container");
const block23 = document.querySelector(".hbl-block-2-part3-content");

if (block2Container.offsetWidth < 1440) {
    let transform = block2Container.offsetWidth / block2.offsetWidth;
    let height = transform * 886.81

    block2Container.style.cssText = `
        transform: scale(${transform});
        transform-origin: top left;
        height: ${height}px;
    `
} else {
    block2Container.style.cssText = `
    `
}

if (block2Container2.offsetWidth < 1440) {
    let transform = block2Container2.offsetWidth / block22.offsetWidth;
    let height = transform * 886.81

    block2Container2.style.cssText = `
        transform: scale(${transform});
        transform-origin: top left;
        height: ${height}px;
    `
} else {
    block2Container2.style.cssText = `
    `
}

if (block2Container3.offsetWidth < 1440) {
    let transform = block2Container3.offsetWidth / block23.offsetWidth;
    let height = transform * 886.81

    block2Container3.style.cssText = `
        transform: scale(${transform});
        transform-origin: top left;
        height: ${height}px;
    `
} else {
    block2Container3.style.cssText = `
    `
}

window.addEventListener('resize', () => {
    if (block2Container.offsetWidth < 1440) {
        let transform = block2Container.offsetWidth / block2.offsetWidth;
        let height = transform * 886.81

        block2Container.style.cssText = `
            transform: scale(${transform});
            transform-origin: top left;
            height: ${height}px;
        `
    } else {
        block2Container.style.cssText = `
        `
    }

    if (block2Container2.offsetWidth < 1440) {
        let transform = block2Container2.offsetWidth / block22.offsetWidth;
        let height = transform * 886.81

        block2Container2.style.cssText = `
            transform: scale(${transform});
            transform-origin: top left;
            height: ${height}px;
        `
    } else {
        block2Container2.style.cssText = `
        `
    }


    if (block2Container3.offsetWidth < 1440) {
        let transform = block2Container3.offsetWidth / block23.offsetWidth;
        let height = transform * 886.81

        block2Container3.style.cssText = `
        transform: scale(${transform});
        transform-origin: top left;
        height: ${height}px;
    `
    } else {
        block2Container3.style.cssText = `
    `
    }
})

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function (data, textStatus, jqxhr) {

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            500: {
                items: 2,
                center: true
            },
            750: {
                items: 3
            },
            1000: {
                items: 4
            },
            1300: {
                items: 5
            },
            1550: {
                items: 6,
                nav: false
            }
        }
    })

    const prevArrow = document.querySelectorAll(".owl-prev");
    const nextArrow = document.querySelectorAll(".owl-next");

    for (let x = 0; x < 3; x++) {
        prevArrow[x].innerHTML = `
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6792 14.3015L26.6792 11.6662L5.41356 11.6662L15.2191 2.84127L13.5644 0.696318L0.204383 12.9532L0.204383 13.0145L13.5644 25.2714L15.2191 23.1264L5.41356 14.3015L26.6792 14.3015Z" fill="black"/>
            </svg>
        `

        nextArrow[x].innerHTML = `
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.320753 11.5563V14.1916L21.5864 14.1916L11.7809 23.0165L13.4356 25.1615L26.7956 12.9046V12.8433L13.4356 0.58642L11.7809 2.73137L21.5864 11.5563L0.320753 11.5563Z" fill="black"/>
            </svg>
        `
    }
});



/*

require(['jquery', 'jquery/ui'], function ($) {
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function (data, textStatus, jqxhr) {

        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                500: {
                    items: 2,
                    center: true
                },
                750: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1300: {
                    items: 5
                },
                1550: {
                    items: 6,
                    nav: false
                }
            }
        })

        const prevArrow = document.querySelectorAll(".owl-prev");
        const nextArrow = document.querySelectorAll(".owl-next");

        for (let x = 0; x < 3; x++) {
            prevArrow[x].innerHTML = `
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.6792 14.3015L26.6792 11.6662L5.41356 11.6662L15.2191 2.84127L13.5644 0.696318L0.204383 12.9532L0.204383 13.0145L13.5644 25.2714L15.2191 23.1264L5.41356 14.3015L26.6792 14.3015Z" fill="black"/>
              </svg>
          `

            nextArrow[x].innerHTML = `
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.320753 11.5563V14.1916L21.5864 14.1916L11.7809 23.0165L13.4356 25.1615L26.7956 12.9046V12.8433L13.4356 0.58642L11.7809 2.73137L21.5864 11.5563L0.320753 11.5563Z" fill="black"/>
              </svg>
          `
        }
    });
});


*/

