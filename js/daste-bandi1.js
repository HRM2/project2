const dasteBandi1 = async () => {
  let dasteBand1 = "";
  let response = await axios("http://localhost:3004/daste%20bandi1");
  response.data.map(function (beta) {
    dasteBand1 += `<div class="col-lg-2 col-3 d-flex flex-column justify-content-center align-items-center gap-2"><img class="col-4" src="${beta.img}"><span class="col-12 text-center">${beta.title}</span></div>`;
  });
  document.querySelector(".daste-bandi1").innerHTML = dasteBand1;
};
export { dasteBandi1 };
