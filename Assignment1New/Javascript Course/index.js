const course = document.getElementById("course");
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
  console.log("hello");
  DATA.forEach((obj) => {
    const new_div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div2.hidden = true;
    const p1 = document.createElement("p");
    p1.textContent = obj.week;
    const ullist = document.createElement("ul");
    obj.content.forEach((val) => {
      const listitem = document.createElement("li");
      listitem.textContent = val;
      ullist.append(listitem);
    });
    div1.append(p1);
    div2.append(ullist);
    new_div.append(div1, div2);
    course.append(new_div);
    div1.addEventListener("click", () => {
      div2.hidden = div2.hidden ? false : true;
      // due to closure of div1, it can access div2
    });
  });
});

dark.addEventListener("click", () => {
  flag = 1 - flag;
  if (flag) {
    document.body.style.background = "hsl(0, 0%, 10%)";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  //     console.log(document.body.style.background, document.body.style.color);
  //     console.log("hello again");
  //   document.body.style.background =
  //     document.body.style.background === "white" ? "hsl(0, 0%, 10%)" : "white";

  //     document.body.style.color =
  //       document.body.style.color === "black" ? "white" : "black";
});
