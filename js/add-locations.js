import {getCityWeatherNow} from './main.js';

const currentCity = document.body.querySelector('.city');
const like = document.body.querySelector('.like');
const list = document.body.querySelector('.locations-list');
const removeCityList = (array, button) => {
    array.forEach(elem => {
        button.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentNode;
            const parentParent = parent.parentNode;
            parentParent.remove();
        })
    })
}

const showWeatherCity = (array) => {
    array.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const target = e.target;
            getCityWeatherNow(target.textContent);
        })
    })
}

const addLocation = () => {
    const locationItem = document.createElement('li');
    locationItem.classList = 'location-item location';
    const city = document.createElement('p');
    city.textContent = currentCity.textContent;
    locationItem.appendChild(city);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList = 'like delete-city';
    const deleteImg = document.createElement('img');
    deleteImg.src = './assets/icons/close-icon.svg';
    deleteImg.alt = 'delete icon';
    deleteBtn.appendChild(deleteImg);
    locationItem.appendChild(deleteBtn);
    list.appendChild(locationItem);
    const arrayCityList = document.querySelectorAll('.location-item');
    const addedLocations = new Set(arrayCityList);
    const filteredArray = Array.from(addedLocations);
    removeCityList(filteredArray, deleteBtn);
    showWeatherCity(filteredArray);
}

like.addEventListener('click', (e) => {
    e.preventDefault();
    addLocation();
})