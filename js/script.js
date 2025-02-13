
// Burger

const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const menuLinks = document.querySelectorAll('#mobile-menu a')


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
    })
})
})




// SlideShow

let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;


function changeSlide(){
    document.querySelector('#slider').style.transform = `translate(-${currentSlide * 100}%)`
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % totalSlides;
    changeSlide();
}

function prevSlide(){
    currentSlide = (currentSlide  - 1 + totalSlides) % totalSlides;
    changeSlide();
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide)


setInterval(nextSlide, 4000)



// ModalWindow

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-img'); 
    const modal = document.getElementById('modal'); 
    const modalImg = document.getElementById('modal-img'); 
    const closeModal = document.getElementById('close-modal'); 

    images.forEach(img => {
        img.addEventListener('click', () => { 
            modal.classList.remove('hidden'); 
            modalImg.src = img.src; 
        });
    });

    
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});









