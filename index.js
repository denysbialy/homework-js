// let counter = 0;
// function counterClick() {
//   console.log(++counter);

// }

// const [button] = document.getElementsByTagName("button");
// button.addEventListener("click", counterClick);

const createMessegeBtn = document.getElementById("createMessage");
const [elemBody] = document.getElementsByTagName('body');
createMessegeBtn.addEventListener("click", funcCreateMessage);

function funcCreateMessage() {
  const addPar = document.createElement("p");
  addPar.textContent = "lorem";
  elemBody.append(addPar);
  addPar.style.color = 'blue'
  addPar.style.fontSize = '20px'
}
