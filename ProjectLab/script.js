const plus = document.querySelector(".plus-sign");
const fL = document.querySelector(".f-l");
const sL = document.querySelector(".s-l");
const tL = document.querySelector(".s-l");
const frL = document.querySelector(".s-l");
const fiL = document.querySelector(".s-l");

const total = document.getElementsByTagName("span");
let count = 0;
let num = document.querySelector(".num");
fL.addEventListener("click", (e) => {
  console.log("plus button clicked");
  console.log(e);
  //   count++;
  if (e.target.getAttribute("class") == "plus-sign") {
    console.log("plus");
    count++;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "minus-sign") {
    console.log("minus");
    count--;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "cross-sign") {
    console.log("cross");
    fL.remove();
  }
});
sL.addEventListener("click", (e) => {
  console.log("plus button clicked");
  console.log(e);
  //   count++;
  if (e.target.getAttribute("class") == "plus-sign") {
    console.log("plus");
    count++;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "minus-sign") {
    console.log("minus");
    count--;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "cross-sign") {
    console.log("cross");
    sL.remove();
  }
});
tL.addEventListener("click", (e) => {
  console.log("plus button clicked");
  console.log(e);
  //   count++;
  if (e.target.getAttribute("class") == "plus-sign") {
    console.log("plus");
    count++;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "minus-sign") {
    console.log("minus");
    count--;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "cross-sign") {
    console.log("cross");
    tL.remove();
  }
});
frL.addEventListener("click", (e) => {
  console.log("plus button clicked");
  console.log(e);
  //   count++;
  if (e.target.getAttribute("class") == "plus-sign") {
    console.log("plus");
    count++;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "minus-sign") {
    console.log("minus");
    count--;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "cross-sign") {
    console.log("cross");
    ftL.remove();
  }
});
fiL.addEventListener("click", (e) => {
  console.log("plus button clicked");
  console.log(e);
  //   count++;
  if (e.target.getAttribute("class") == "plus-sign") {
    console.log("plus");
    count++;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "minus-sign") {
    console.log("minus");
    count--;
    num.innerHTML = count;
    total.innerHTML = count;
  } else if (e.target.getAttribute("class") == "cross-sign") {
    console.log("cross");
    fiL.remove();
  }
});