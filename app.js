const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector('.button-wrapper');
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector('.imageList-wrapper');

runEventListeners();

function runEventListeners() {
    form.addEventListener('submit', search);
    clearButton.addEventListener('click', clear);
}

function clear(){
    searchInput.value = "";
    imageListWrapper.innerHTML = "";
}

function search(e) {
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers: {
            Authorization: "Client-ID Mwmte8rA1e_1gp7YO_sf74rB0-Y68F45DGSxTVW5UTU"
        }
    })

    .then((response) => response.json())
    .then((data) => {
        Array.from(data.results).forEach((image) => {
            addImageToUI(image.urls.small);
        })
    })
    .catch((err) => console.log(err));


    e.preventDefault();
}

function addImageToUI(url){
    console.log(imageListWrapper);
    const div = document.createElement("div");
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.height = "400";
    img.width = "450";

    div.append(img);
    imageListWrapper.append(div);

}