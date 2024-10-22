const menu = () => {
  let menuItems = "";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3004/menu");
  xhr.responseType = "json";
  xhr.onload = () => {
    xhr.response.map((delta) => {
      menuItems += `<li class="d-flex justify-content-center align-items-center list-unstyled"><a class="text-decoration-none text-white" href="#">${delta.title}</a></li>`;
      document.querySelector(".menu-items").innerHTML = menuItems;
    });
  };
  xhr.send();
};
export { menu };
