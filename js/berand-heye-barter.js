const berandHayeBartar = async function () {
  let barandHayeBart = "";
  let url = await fetch("http://localhost:3004/berand%20haye%20bartar");
  let url2 = await url.json();
  url2.map(function (z) {
    barandHayeBart += `<div class="col-lg-2 col-3"><img class="col-lg-12 col-10" src="${z.img}"></div>`;
  });
  document.querySelector(".berand-haye-bartar-child").innerHTML =
    barandHayeBart;
};
export { berandHayeBartar };
