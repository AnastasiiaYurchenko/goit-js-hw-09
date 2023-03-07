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
// fetch(`https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("error", error);
//     });

// 67потік Лектор

const options = {
    headers: {
        "X-Api-Key": "9d46ea07e04d4f7f9708dcaed27cd554",
    },
};
const form = document.querySelector("form");
const newsWrapper = document.querySelector("#newswrapper");
console.log(newsWrapper);

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit");

    const form = e.currentTarget;
    const value = form.elements.news.value.trim();
    console.log(value);
    fetchData(value)
        .then(({ articles }) => {
        if (articles.length === 0) throw new Error("No data");
            console.log(articles);

            return articles.reduce((markup, article) => createMarkup(article) + markup, "");
        })
        .then(updateNewslist)
        // або
        // .then(markup => {
        //     console.log(markup);
        //     updateNewslist(markup);
        // }) 
        .catch(onError)
        .finally(() => form.reset())
};

function updateNewslist(markup) {
    newsWrapper.innerHTML = markup;
};

function createMarkup({ author, title, url, urlToImage, description }) {
    return `
    <div class ="article-card">
        <img src=${urlToImage} class="article-img">
        <h2 class="article-title">${title}</h2>
        <h3 class="article-author">${author || "anonymous"}</h3>
        <p class="article-description">${description}</p>
        <a href=${url} class="article-link" target="_blank">Read more</a>
    </div>
    `
}

function fetchData(query) {
    const URL = `https://newsapi.org/v2/everything?q=${query}`;
    return fetch(URL, options)
    .then((response) => response.json())
};

// fetchData("gpt").then(console.log)

function onError(err) {
    console.log(err);
    updateNewslist("<p>Articles not found</p>")
};

