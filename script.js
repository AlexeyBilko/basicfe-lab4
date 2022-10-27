//Task 1

const firstElement = document.getElementById('firstElement');

function changeColorFirstElement(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
    let randomBackGroundColor = randomNumber.padStart(6, 0); 
    randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
    let randomColor = randomNumber.padStart(6, 0); 

    firstElement.style.background = "#" + randomBackGroundColor;
    firstElement.style.color = "#" + randomColor;
}


const secondElement = document.querySelector('#secondElement');

function changeColorSecondElement(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
    let randomBackGroundColor = randomNumber.padStart(6, 0); 
    randomNumber = Math.floor(Math.random() * maxVal).toString(16); 
    let randomColor = randomNumber.padStart(6, 0); 

    secondElement.style.background = "#" + randomBackGroundColor;
    secondElement.style.color = "#" + randomColor;
}

// Task 2

const addImageButton = document.getElementById('addImageButton');
const zoomInImageButton = document.getElementById('zoomInImageButton');
const zoomOutImageButton = document.getElementById('zoomOutImageButton');
const removeImageButton = document.getElementById('removeImageButton');

const container = document.querySelector('.container');


const imgContainerHTML = `
                            <a href="https://kyivcity.gov.ua">
                                <img src="images/kyiv.jpg" alt="Kyiv photo">
                            </a>
                        `;

const scaleParameters = {
    initialState: 1,
    currentScale: 1,
    minimumScale: 0.1,
    maximumScale: 10,
    step: 0.2,
};

function AddNewImage(){
    const imageToInsert = document.createElement('div');
    imageToInsert.innerHTML = imgContainerHTML;
    imageToInsert.classList.add('image-container');
    container.appendChild(imageToInsert);
};


function ZoomIn(){
    const lastImageContainer = container.querySelector('div:last-child');
    if (!lastImageContainer) return;
    const nextScale = scaleParameters.currentScale + scaleParameters.step;
    if (nextScale > scaleParameters.maximumScale) return;
    const currentImageElement = lastImageContainer.querySelector('a');
    currentImageElement.style.transform = `scale(${nextScale})`;
    scaleParameters.currentScale = nextScale;
};


function ZoomOut(){
    const lastImageContainer = container.querySelector('div:last-child');
    if (!lastImageContainer) return;

    const nextScale = scaleParameters.currentScale - scaleParameters.step;
    if (nextScale < scaleParameters.minimumScale) return;
    const currentImageElement = lastImageContainer.querySelector('a');
    currentImageElement.style.transform = `scale(${nextScale})`;
    scaleParameters.currentScale = nextScale;
};


function RemoveLastImage(){
    const lastImageContainer = container.querySelector('div:last-child');
    if (!lastImageContainer) return;
    container.removeChild(lastImageContainer);
    scaleParameters.currentScale = scaleParameters.initialState;
};