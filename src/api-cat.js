const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_McMKNV2rrcuDSwoqlCNt210GQCeXFyydyPP6sVUusM3pLz0qPGJSRC1FXqM8ky3W'

export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();
        })
}

export function fetchCatByBreed(breedId)
{
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
             throw new Error(response.statusText)
            }
            return response.json()
    })
}