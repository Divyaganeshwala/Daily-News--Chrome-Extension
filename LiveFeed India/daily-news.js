const URL= "https://api.thenewsapi.com/v1/news/top?api_token=WDjtCHZKTg0tCwKy38SXibUriQuVM5TaM4pJ9oTl&locale=in&limit=3"
async function getNewsData() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const newsList = data.data;
        console.log({ newsList });

        const relevantData = newsList.map(news => `
            <h4>${news.title}</h4>
            ${news.description}<br>
            <img src="${news.image_url}" width="100px" height="100px" alt="Image"><br>
            <a href="${news.url}" target="_blank">Link to article</a>
        `);

        document.getElementById("news-list").innerHTML = relevantData.map(news => `<li>${news}</li>`).join('');
        return relevantData;
    } catch (error) {
        console.error(error);
        document.getElementById("news-list").innerHTML = "Sorry, the server is down. Please try again later.";
    }
}

getNewsData();