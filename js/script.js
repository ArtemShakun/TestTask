const requestURL = 'http://127.0.0.1:5500/data.json';
const blockName = document.querySelector('.block__name')
const sortAge = document.querySelector('.filter-age');
const sortId = document.querySelector('.filter-id');


async function getData(url) {
   try {
      const response = await fetch(url);
      let data = await response.json();
      viewUser(data);
   } catch (error) {
      console.warn(error);
      return error;
   }
}

const listViewUser = data => {

   const contentBlock = document.getElementById('list-view');


   data.forEach(item => {
      console.log(item.age)
      const listUser = document.createElement('div');
      listUser.classList.add('list-view__user');

      const userBlockName = document.createElement('div');
      userBlockName.classList.add('list-view__user__name')


      const checkbox = document.createElement('input')
      checkbox.setAttribute('type', 'checkbox');

      const logo = document.createElement('div');
      logo.classList.add('list-view__user-logo');

      const logoImg = document.createElement('IMG');
      logoImg.src = `images/${item.image}.svg`;

      const userName = document.createElement('div');
      userName.classList.add('list-view__user-name');
      userName.textContent = `${item.name.ru}`


      logo.append(logoImg)
      userBlockName.append(checkbox, logo, userName)

      const userAge = document.createElement('div');
      userAge.classList.add('list-view__user-age')
      userAge.textContent = `${item.age}`;

      const userPhone = document.createElement('div');
      userPhone.classList.add('list-view__user-phone');
      userPhone.textContent = `${item.phone}`;

      const userFavoriteImg = document.createElement('div');
      userFavoriteImg.classList.add('list-view__user-favorite');

      const favoriteImg = document.createElement('IMG');
      favoriteImg.src = `images/starOff.svg`;
      userFavoriteImg.append(favoriteImg);

      listUser.append(userBlockName, userAge, userPhone, userFavoriteImg);
      contentBlock.append(listUser);

   })

}

const gridVewUser = data => {

   const userView = document.querySelector('.grid-view__user');

   data.forEach(item => {
      const userInform = document.createElement('div');
      userInform.classList.add('user__user-inform');

      const userTopInform = document.createElement('div');
      userTopInform.classList.add('user-inform__top');

      const userLogo = document.createElement('div');
      userLogo.classList.add('user-inform__logo');

      const userLogoImg = document.createElement('IMG');
      userLogoImg.src = `images/${item.image}.svg`;

      userLogo.append(userLogoImg);

      const userName = document.createElement('div');
      userName.classList.add('user-inform__name');
      userName.textContent = `${item.name.ru}`;

      const userFavorite = document.createElement('div');
      userFavorite.classList.add('user-inform__favorite');

      const userFavoriteImg = document.createElement('IMG');
      userFavoriteImg.src = `images/starOn.svg`;

      userFavorite.append(userFavoriteImg);


      userTopInform.append(userLogo, userName, userFavorite);

      const userConetnt = document.createElement('div');
      userConetnt.classList.add('user-inform__content');

      const userAge = document.createElement('div');
      userAge.classList.add('user-inform__age');
      userAge.textContent = `${item.age} лет`

      const userPhone = document.createElement('div');
      userPhone.classList.add('user-inform__phone');
      userPhone.textContent = `${item.phone}`;

      const userText = document.createElement('div');
      userText.classList.add('user-inform__text');
      userText.textContent = `${item.phrase.ru}`;

      userConetnt.append(userAge, userPhone, userText);

      userInform.append(userTopInform, userConetnt);
      userView.append(userInform);
   });

}

const viewUser = (data) => {
   gridVewUser(data)
   listViewUser(data)
}


// sortAge.addEventListener('click', async () => {

//    const response = await fetch(requestURL);
//    let data = await response.json();

//    data.sort((a, b) => a.age - b.age);

//    gridVewUser(data)
// });

getData(requestURL)