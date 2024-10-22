const dasteBandi2 = async () => {
  let dasteBand2 = "";
  let query = await fetch("http://localhost:3004/daste%20bandi2");
  let query2 = await query.json();
  query2.map((a) => {
    dasteBand2 += `<div class="col-lg-3 col-5 d-flex justify-content-centerr"><img class="col-lg-11 col-12" src="${a.img}"></div>`;
  });
  document.querySelector(".daste-bandi2").innerHTML = dasteBand2;
};
export { dasteBandi2 };
