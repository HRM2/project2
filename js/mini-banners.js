const miniBanners = async function () {
  let minibanner = "";
  let server = await axios("http://localhost:3004/mini%20banners");
  server.data.map(function (x) {
    minibanner += `<div class="col-12 col-md-5"><img class="col-12" src="${x.img}"></div>`;
  });
  document.querySelector(".mini-banners").innerHTML = minibanner;
};
export { miniBanners };
