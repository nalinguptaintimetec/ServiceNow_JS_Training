const mainimage = document.getElementById("mainimage");
const imag = document.getElementsByClassName("preview");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
const Name = document.getElementById("Name");
const Designation = document.getElementById("Designation");
const Experience = document.getElementById("Experience");

// session storage
// const userinfo = document.getElementById("userinfo");

// let 

// userinfo.textContent = `Welcome`

let dataSources;
let cnt = 1;

async function getData() {
    const res = await fetch("dummyData.json");
    const data = await res.json();

    console.log(data.data);

    return data.data;
}

getData().then((res) => {
    dataSources = res;
    mainimage.src = dataSources[cnt].image;
    Name.textContent = dataSources[cnt].name;
    Designation.textContent = dataSources[cnt].designation;
    Experience.textContent = dataSources[cnt].experience;
    for(let i = 0; i < 3; i++) {
        imag[i].src = dataSources[i].image;
    }
})

function previmage() {
    showData((cnt + 2) % 3);
}

function nextimage() {
    showData((cnt + 1) % 3);
}

function showData(ind) {
    mainimage.src = dataSources[ind].image;
    Name.textContent = dataSources[ind].name;
    Designation.textContent = dataSources[ind].designation;
    Experience.textContent = dataSources[ind].experience;
    cnt = ind;
}

prevbtn.addEventListener("click", previmage);
nextbtn.addEventListener("click", nextimage);