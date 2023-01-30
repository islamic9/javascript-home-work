const height = +prompt("please! enter a height value");
const width = +prompt("please! enter a width value");
const x = (width + "rem");
const y = (height + "rem");
const yuzasi = height * width;
const formula =2*(height + width);
document.getElementById("tortburchak").style.border  = "solid 5px";
document.getElementById("tortburchak").style.maxWidth  = "auto";
document.getElementById("tortburchak").style.minHeight  = "auto";
document.getElementById("tortburchak").style.background = "gold";
document.getElementById("tortburchak").style.width = x;
document.getElementById("tortburchak").style.height = y;

  