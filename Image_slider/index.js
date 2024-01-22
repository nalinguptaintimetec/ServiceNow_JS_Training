

const mainimage = document.getElementById("mainimage");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");

let imagesources = ["images/image1.jpg", "images/image2.jfif", "images/image3.jfif"];

function previmage() {
    let currentindex = imagesources.indexOf(mainimage.src.substr(22));
    console.log(currentindex); 
    showimage((currentindex + 2) % 3);
}

function nextimage() {
    let currentindex = imagesources.indexOf(mainimage.src.substr(22));
    console.log(currentindex);
    showimage((currentindex + 1) % 3);
}

function showimage(index) {
    if (index >= 0 && index < imagesources.length) {
        mainimage.src = imagesources[index];
    }
}

prevbtn.addEventListener("click", previmage);
nextbtn.addEventListener("click", nextimage);