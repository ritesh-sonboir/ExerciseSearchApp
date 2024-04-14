 import axios from 'axios'

export const exerciseOptions = {
  method: 'GET',
  params: {
    limit: '500',
    offset: '1000'
  },
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key':import.meta.env.VITE_REPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
};
export const fetchData = async (options) =>{
  try {
    const response = await axios.request(options);
    const data = await response.data
    console.log('axiose data is =>',data);
    return data
  } catch (error) {
    console.error("axios fetching err: ",error);
  }
  
  //  const response = await fetch(url,options)
  //  const data = await response.json()
  //  return data 
}

export const fetchDatabodypart = async (url,options) =>{
   const response = await fetch(url,options)
   const data = await response.json()
   return data 
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  params: {
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key':import.meta.env.VITE_REPID_API_YOUTUBE_SEARCH_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//   params: {limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': 'c126fe3abfmshe743f5a6fe3503cp1d778djsnd8bcef08071b',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }