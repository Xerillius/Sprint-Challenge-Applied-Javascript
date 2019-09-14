// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

const getArticles = async function(url) {
    let res = await axios.get(url);
    Object.entries(res.data.articles).forEach(element => {
        element[1].forEach(e => {
            cardContainer.appendChild(createCard(e));
        })
    })
}

getArticles('https://lambda-times-backend.herokuapp.com/articles');

let create = element => {
    return document.createElement(element);
}

function createCard (data) {
    let card = create('div');
    let cardHeadline = create('div');
    let cardAuthor = create('div');
    let cardImgCont = create('div');
    let cardImage = create('img');
    let cardBy = create('span');

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardImgCont);
    cardImgCont.appendChild(cardImage);
    cardAuthor.appendChild(cardBy);

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgCont.classList.add('img-container');

    cardHeadline.textContent = data.headline;
    cardBy.textContent = `By ${data.authorName}`;
    cardImage.setAttribute('src', data.authorPhoto);
    
    return card;
}