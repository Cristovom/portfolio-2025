const btnProject = document.querySelectorAll(".open-projects");
const btnTool = document.querySelector('a.btn-projects[data-project="tool"]');
const btnLanding = document.querySelector('a.btn-projects[data-project="landing"]');
const boxProjetosLanding = document.querySelector('.mySwiper[data-project="landing"]');
const boxProjetosTool = document.querySelector('.mySwiper[data-project="tool"]');

btnProject.forEach(btn => {
    btn.addEventListener('click', function() {
        if(this.dataset.project == 'tool') {
            openProjects();
            btnTool.classList.add('active');
            boxProjetosLanding.style.display = 'none';
            boxProjetosTool.style.display = 'block';
        } else {
            openProjects();
            btnLanding.classList.add('active');
            boxProjetosTool.style.display = 'none';
            boxProjetosLanding.style.display = 'block';
        }
    })
})

const bodyContent = document.querySelector('body')
const secProjects = document.querySelector('section.projetos');

// abre os projetos
function openProjects() {
    secProjects.classList.add('viewer');
    secProjects.style.top = `${window.scrollY}px`;
    secProjects.style.transform = 'translateX(0%)';
}

// fecha projetos
function closeProjects() {
    secProjects.classList.remove('viewer');
    secProjects.style.transform = 'translateX(100%)';
    let btnsProjects = document.querySelectorAll('a.btn-projects[data-project]');
    btnsProjects.forEach(btn => {
        btn.classList.remove('active');
    })
}

// manipula scroll
let ticking = false;

function calcScroll() {
    let alturaPage = window.scrollY;
    secProjects.style.top = alturaPage + 'px';
    ticking = false;
}

window.addEventListener('scroll', function () {
    if (!ticking) {
        requestAnimationFrame(calcScroll);
        ticking = true;
    }
});

// manipula projetos
btnLanding.addEventListener('click', function() {
    btnTool.classList.remove('active');
    btnLanding.classList.add('active');
    boxProjetosLanding.style.display = 'block';
    boxProjetosTool.style.display = 'none';
})
btnTool.addEventListener('click', function() {
    btnLanding.classList.remove('active');
    btnTool.classList.add('active');
    boxProjetosTool.style.display = 'block';
    boxProjetosLanding.style.display = 'none';
})

// carousel projetos
var swiper = new Swiper(".mySwiper", {
    keyboard: true,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});