const main=document.getElementById('articles_container');
let data;
 async function getData(){
    const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=96930874319845efb82bd87fefc5a240");
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log("\n : data: ",data);
    renderUI();
}
getData();
function renderUI(){
for(let i=0;i<dataLength;i++){
    const article=document.createElement('article');
    article.innerHTML = `
    <img class="img" src="${data[i].urlToImage}"/>
                <div class="articlecont">
                    <h2>${data[i].title} </h2>
                    <p> ${data[i].description}</p>
                    <a href="${data[i].url}" traget="_blank" style="color:red; text-decoration:none; margin-left: 10px;">Read More...</a>
                </div>`;
    
     main.appendChild(article);
}

}