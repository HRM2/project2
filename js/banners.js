const banners = async () => {
  let banner = "";
  let res = await axios("http://localhost:3004/banners");
  res.data.map((elem) => {
    banner += `<div class="col-12 col-lg-9"><img class="col-12" src="${elem.img}"></div>`;
  });
  document.querySelector(".banners").innerHTML = banner;
};
export { banners };
