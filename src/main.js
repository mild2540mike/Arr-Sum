import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});
// Select elements
let formAdd = document.querySelector(".addNumbers");
let formSearch = document.querySelector(".search");
let showArrRes = document.querySelector(".showArrRes");

let arr = [];
formAdd.onsubmit = (e) => {
  e.preventDefault();
  arr.push(Number(formAdd.array.value));
  formAdd.reset();
  showArrRes.innerHTML = "";
  showArrRes.prepend(`${arr}`);
};

let numToFind = 0;
formSearch.onsubmit = (e) => {
  e.preventDefault();
  numToFind = +formSearch.find.value;
  formSearch.reset();
  showArrRes.innerHTML = "";
  sumArrayNumbers(numToFind, arr);
};

function sumArrayNumbers(numToFind, arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let b = 0; b < arr.length; b++) {
      let res = arr[b] + (i !== b ? num : undefined);
      if (res === numToFind) {
        let div = document.createElement("div");
        div.innerHTML = ` result : ${arr[b]} + ${num} = ${numToFind}  `;
        showArrRes.prepend(div);
      }
    }
  }
}

export default app;
