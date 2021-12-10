const API_KEY = "100170a73103a63e846d1b0f84c3bb5c";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";

// trending/all/day?api_key=<<api_key>>

const getData = url => {
   return fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
        throw `Что то пошло не так, ошибка ${response.status}`

    })
  
    .catch(err => console.error(err));
};



export const getTriends = async (type = 'all', period = 'week', page = 1) => {
     const url =`${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
      return await getData(url);
     console.log('data:', data)
}