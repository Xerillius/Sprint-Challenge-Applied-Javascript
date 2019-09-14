// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

const getTabs = async function(url) {
    let res = await axios.get(url);
    res.data.topics.forEach(element => {
        topics.appendChild(createTabs(element));
    })
}

getTabs('https://lambda-times-backend.herokuapp.com/topics');

function createTabs (data) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;
    return tab;
}