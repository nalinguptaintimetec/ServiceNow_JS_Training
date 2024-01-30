// Weeb Geeks

const animeImages = document.getElementById("animeImages");
const Anime = document.getElementById("Anime");
const Jujutsu = document.getElementById("Jujutsu");
const Naruto = document.getElementById("Naruto");
const One_Piece = document.getElementById("One_Piece");
const dark = document.getElementById("dark");
let DATA = [];
let flag = 0;

async function getData() {
  let res = await fetch("mockData.json");
  let data = await res.json();

  return data.data;
}

getData().then((res) => {
  DATA = res;
  setData("All");
});

function setData(type) {
  animeImages.innerHTML = "";
  // while(animeImages.firstChild) {
  //     animeImages.removeChild(animeImages.firstChild);
  // }

  DATA.forEach((obj) => {
    if (obj.anime === type || type === "All") {
      let new_div = document.createElement("div");
      new_div.classList.add("characterContainer");
      let newImage = document.createElement("img");
      newImage.classList.add("characterImage");
      let name = document.createElement("label");
      let anime = document.createElement("label");
      newImage.src = obj.imageURL;
      name.textContent = obj.name;
      anime.textContent = obj.anime;
      new_div.append(newImage, name, anime);
      animeImages.append(new_div);
    }
  });
}



Anime.addEventListener("click", () => {
  setData("All");
});

Jujutsu.addEventListener("click", () => {
  setData("Jujutsu Kaisen");
});

Naruto.addEventListener("click", () => {
  setData("Naruto");
});

One_Piece.addEventListener("click", () => {
  setData("One Piece");
});

dark.addEventListener("click", () => {
    flag = 1 - flag;
    if(flag) document.body.style.background = "hsl(0, 0%, 20%)"; 
    else document.body.style.background = "white"
})
