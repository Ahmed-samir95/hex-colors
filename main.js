// make hex color code
let hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hex = [];
for (let i = 0; i < 6; i++) {
    hex.push(hexArr[Math.floor(Math.random() * hexArr.length)]); 
};

let hexColor = `#${hex.join("")}`;
console.log(hexColor)

// create main div
let container = document.createElement("div");
container.id = "container";
container.className = "container";

container.style.cssText = "width: 97%; height: 80vh; margin: auto; box-shadow: 0px 2px 15px rgb(18 66 101 / 8%); background-color: #fff;";

// create main-heading
let mainHeading = document.createElement("h1");

let mainHeadingText = document.createTextNode("We offer you an infinite number of hex color code");

mainHeading.appendChild(mainHeadingText);

container.appendChild(mainHeading);
 
mainHeading.style.cssText = "font-size: 23px; text-align: center; padding: 20px 0; color: #777;";

// create box of color
let boxOfColor = document.createElement("div");
boxOfColor.id = "boxOfColor";

boxOfColor.style.cssText = "width: 40%; height: 120px; border: 1px solid #000; margin: auto; margin-bottom: 20px;";
boxOfColor.style.backgroundColor = hexColor;

container.appendChild(boxOfColor);

// create hexDesc
let hexDesc = document.createElement("p");
let hexDescText = document.createTextNode("your hex code color : "+(hexColor));

hexDesc.appendChild(hexDescText)

hexDesc.style.cssText = "font-size: 20px; text-align: center; padding: 20px 0; color: #777;";

container.appendChild(hexDesc);

// create changeBtn
let changeBtn = document.createElement("button");

let changeBtnText = document.createTextNode("Change Color");

changeBtn.appendChild(changeBtnText);

changeBtn.style.cssText = "display: block; color: #777; margin: auto; cursor: pointer; background-color: #fff; width: 140px; font-weight: bold; height: 50px; line-height: 40px; border-radius: 10px; text-align: center;";

// change hex color code
changeBtn.onclick = function () {
    window.location.reload();
}

container.appendChild(changeBtn);

document.body.style.cssText = "background-color: #E8EAED; font-family: 'Work Sans', sans-serif;"

document.body.prepend(container)