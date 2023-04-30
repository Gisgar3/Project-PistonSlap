// wait until the document is loaded

function createStar() {
        
    const starsContainer = document.getElementById('stars');
    const star = document.createElement('div');
    star.classList.add('star');

    let size = Math.random() * 4 + 1;
    const xPos = Math.random() * window.innerWidth;
    let yPos = Math.random() * window.innerHeight;
    const duration = Math.random() * 8 + 2;

    // random number between 0 and 2
    const random = Math.floor(Math.random() * 3);

    // if more than 1 set size to 45 and make background the wrench
    if (random > 1) {
        size = 45;
        let wrench = `url(./wrench.png) no-repeat center center`;
        star.style.background = wrench;
        star.style.opacity = Math.random() * 0.7 + 0.3;
    }else{
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.background = `white`;
    }

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;

    star.style.animationDuration = `${duration}s`;

    starsContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(createStar, 35);
