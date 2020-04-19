/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://github.com/BryanPAnderson")
  .then(function (response) {
    // handle success
    console.log(response);
    const returnedCard = createCard(response);
    console.log(returnedCard);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/


/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan","dustinmyers","justsml","luishrd","bigknell"];
followersArray.forEach(element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(function (response) {
    // handle success
    console.log(response);
    const returnedCard = createCard(response);
    console.log(returnedCard);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
});
})

//https://api.github.com/users/Alisa1989/following

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(obj) 
{
  //createing elements and giving class names
  const card = document.createElement('div');
  card.classList.add("card");
  const cardImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  cardInfo.classList.add("card-info");
  const cardName = document.createElement('h3');
  cardName.classList.add("name");
  const cardUsername = document.createElement('p');
  cardUsername.classList.add("username");
  const cardLocation = document.createElement('p');
  const cardProfile = document.createElement('p');
  const cardFollowers = document.createElement('p');
  const cardFollowing = document.createElement('p');
  const cardBio = document.createElement('p');
  const cardUserAddress = document.createElement('a');

  //appending
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardProfile.appendChild(cardUserAddress);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  //assign values
  cardImage.src = obj.data.avatar_url;
  cardName.textContent = obj.data.name;
  cardUsername.textContent = obj.data.login;
  cardLocation.textContent = obj.data.location;
  cardUserAddress.href = obj.data.html_url;
  cardUserAddress.textContent = `Profile: ${obj.data.html_url}`;
  cardFollowers.textContent = `Followers: ${obj.data.followers}`;
  cardFollowing.textContent = `Following: ${obj.data.following}`;
  cardBio.textContent = `Bio: ${obj.data.bio}`;

  const cardsHolder = document.querySelector(".cards");
  cardsHolder.appendChild(card);

  return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/