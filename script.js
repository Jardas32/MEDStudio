const teorchast = document.querySelector('.btteor');
const chastfo = document.querySelector('.chast-fo');
const arrowUp = document.querySelector('.arrowUp');
const btpay = document.querySelector('.btpay');
const bgpopup = document.querySelector('.bgpopup');
const btclosed = document.querySelector('.btclosed');
const opendostup = document.querySelector('.open-dostup');
const dostupchast = document.querySelector('.chast-two');
const arrowsUp = document.querySelector('.arrowsUp');


opendostup.addEventListener('click', () => {
    let style = getComputedStyle(dostupchast);

    if(style.display === `none`) {
        dostupchast.style.display = `block`;
        arrowsUp.style.rotate = `180deg`;
    }
    else if(style.display !== `none`) {
        dostupchast.style.display = `none`;
        arrowsUp.style.rotate = `initial`;
    }
});

teorchast.addEventListener('click', () => {
    let style = getComputedStyle(chastfo);

    if(style.display === `none`) {
        chastfo.style.display = `block`;
        arrowUp.style.rotate = `180deg`;
    }else if(style.display !== `none`) {
        chastfo.style.display = `none`;
        arrowUp.style.rotate = `initial`;
    }
 
});
                //   Po-up

btpay.addEventListener('click', () => {
    bgpopup.classList.add('bgpopupclass');
    document.querySelector('html').classList.add('noScroll');
});

btclosed.addEventListener('click', () => {
    bgpopup.classList.remove('bgpopupclass');
    document.querySelector('html').classList.remove('noScroll');
});

                // Animation
                
window.addEventListener('DOMContentLoaded', () => {

let Callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

let observer = new IntersectionObserver(Callback);

let targets = document.querySelectorAll('.anim');
targets.forEach(targe => {
    observer.observe(targe);
});
})
                //    Go-Top
               
const goup = document.querySelector('.goup');
goup.addEventListener('click', goTop);
window.addEventListener('scroll', tracker);

function tracker() {
    let offset = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if(offset > coords) {
        goup.classList.add('goupclass');
    }
    else {
        goup.classList.remove('goupclass');
    }
};

function goTop() {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -60)
        setTimeout(goTop, 0)
    }
};


const btopenheaders = document.querySelector('.btopenheaders');
const headersul = document.querySelector('.headers ul');
const span2 = document.querySelector('.span2');
const span1 = document.querySelector('.span1');
const span3 = document.querySelector('.span3');

window.addEventListener('DOMContentLoaded', function() {
    btopenheaders.addEventListener('click', function() {
        headersul.classList.toggle('open');
        span2.classList.toggle('open'); 
        span1.classList.toggle('open');
        span3.classList.toggle('open');
    })
});



