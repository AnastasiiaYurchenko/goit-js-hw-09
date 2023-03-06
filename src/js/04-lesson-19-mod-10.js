const API_KEY = "9d46ea07e04d4f7f9708dcaed27cd554";

// fetch(`https://newsapi.org/v2/everything?q=Apple&from=2023-03-06&sortBy=popularity&apiKey=${API_KEY}`)
    // .then((response) => response.json()) конверуємо дані в json
//     .then((data) => {
//         console.log(data) виводимо дані в консоль
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// const BASE_URL = "https://newsapi.org/v2";
// const URL = `${BASE_URL}/v2/top-headlines?apiKey=${API_KEY}&category=sports&country=ua&pageSize=10`;
fetch(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("error", error);
    });