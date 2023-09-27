export const storage = {
    saveFavoriteCities() {
        localStorage.setItem('cityList', JSON.stringify('favoriteCities'));
    },
    saveCurrentCities() {
      localStorage.setItem('currentCity', JSON.stringify('currentCity'));
    },
    getFavoriteCities() {
        return JSON.parse(localStorage.getItem('favoriteCities'));
    },
    getCurrentCity() {
        return JSON.parse(localStorage.getItem('currentCity'));
    }
}

export const favoriteCities = storage.getFavoriteCities();
export const currentCity = storage.getCurrentCity();