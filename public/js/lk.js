const addPostForm = document.querySelector('.add-post-form');
const myPostsNavButton = document.querySelector('#myPostsNavButton');
const addPostNavButton = document.querySelector('#addPostNavButton');
const addPostContainer = document.querySelector('.addPostContainer');
const lkMyPostsContainer = document.querySelector('.lkMyPostsContainer');

if (addPostForm) {
  addPostForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(addPostForm));
    const response = await fetch('/lk/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      window.location.href = '/';
    }
  });
}

myPostsNavButton.addEventListener('click', async (event) => {
  try {
    const response = await fetch('/lk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ addPost: false, myPosts: true }),
    });
    if (response.ok) {
      console.log('looking at my posts');
      const data = await response.json();
      console.log(data);
      addPostContainer.innerHTML = '';
      lkMyPostsContainer.innerHTML = '';
      for (let i = 0; i < data.userPosts.length; i += 1) {
        lkMyPostsContainer.insertAdjacentHTML('afterbegin', `
          <div class="lkPostInMyPostsContainer">
            <img class="card-image-container" src="${data.userPosts[i].Card.img}">
            <div>Название: ${data.userPosts[i].Card.name}</div>
            <div>Цена: ${data.userPosts[i].price}$</div>
            <div>Cостояние: ${data.userPosts[i].State.name}</div>
          </div>
        `);
      }
    }
  } catch (err) {
    console.log('trying to POST error', err);
  }
});

addPostNavButton.addEventListener('click', async (event) => {
  try {
    const response = await fetch('/lk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('trying to add new post');
      const data = await response.json();
      console.log(data);
      lkMyPostsContainer.innerHTML = '';
      addPostContainer.innerHTML = `
      <form class="add-post-form">
        <div class="card-image-container"></div>
        <label for="cardName">Название карточки:</label><br>
        <input type="text" name="cardName"><br>
        <label for="price">Цена:</label><br>
        <input type="text" name="price">
        <label for="price">Состояние:</label><br>
        <input type="text" name="state_id">
        <button type="submit">Выставить на продажу</button>
      </form>
      `;
    }
  } catch (err) {
    console.log('trying to POST error', err);
  }
});
