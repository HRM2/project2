const banner2 = async function () {
  let banne2 = "";
  let answer = await axios("http://localhost:3004/banner2");
  answer.data.map((alpha) => {
    banne2 += `<img class="col-12" src="${alpha.img}">`;
  });
  document.querySelector(".banner2").innerHTML = banne2;
};
export { banner2 };
