const images = [
    'https://images.unsplash.com/photo-1680352960642-d701eb58323d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1680264534453-27b46832ffe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1680199694087-7225703589a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
    'https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
    'https://plus.unsplash.com/premium_photo-1675597063624-61bfe7ea69f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFoYWRldnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60'
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

const containerWidth = 80;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

for(let i = 0; i < n; i++) {
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);
}

let curPosition = 0;
leftButton.addEventListener('click', ()=> {
    if(curPosition > 0) {
        curPosition--;
    } else {
        curPosition = n-1;
    }
    showImg();
})

rightButton.addEventListener('click', ()=> {
    if(curPosition < n-1) {
        curPosition++;
    } else {
        curPosition = 0;
    }
    showImg();
})

function showImg() {
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}