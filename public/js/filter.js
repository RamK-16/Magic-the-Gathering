const cityInput = document.querySelector('#citySearch');
const cardInput = document.querySelector('#cardSearch');

async function cityFilter() {
  const searchValue = cityInput.value.toLowerCase();

  const response = await fetch('/filterCity');
  if (response.ok) {
    const result = await response.json();
    let string = '';
    const resultArr = result.filter((el) => el.name.toLowerCase().indexOf(searchValue) === (0))
      .map((el) => el.name);

    for (let i = 0; i < resultArr.length; i += 1) {
      string += `<div onclick="selectCity(this)">${resultArr[i]}</div>\n`;
    }
    const searchCityList = document.querySelector('#searchCityList');
    if (searchValue.length === 0) {
      searchCityList.innerHTML = '';
      return;
    }
    searchCityList.innerHTML = string;
  }
}
async function cardFilter() {
  const searchValue = cardInput.value.toLowerCase();
  const response = await fetch('/filterCard');
  if (response.ok) {
    const result = await response.json();
    let string = '';
    const resultArr = result.filter((el) => el.name.toLowerCase().indexOf(searchValue) !== (-1))
      .map((el) => el.name);
    for (let i = 0; i < resultArr.length; i += 1) {
      string += `<div onclick="selectCard(this)">${resultArr[i]}</div>\n`;
    }
    const searchCardList = document.querySelector('#searchCardList');
    if (searchValue.length === 0) {
      searchCardList.innerHTML = '';
      return;
    }
    searchCardList.innerHTML = string;
  }
}

async function getListCards() {
  const cardInputLk = document.querySelector('#cardSearchLk');
  const searchValue = cardInputLk.value.toLowerCase();
  const response = await fetch('/filterCard');
  if (response.ok) {
    const result = await response.json();
    let string = '';
    const resultArr = result.filter((el) => el.name.toLowerCase().indexOf(searchValue) !== (-1))
      .map((el) => el.name);
    for (let i = 0; i < resultArr.length; i += 1) {
      string += `<div onclick="selectCardLk(this)">${resultArr[i]}</div>\n`;
    }
    const searchCardList = document.querySelector('#searchCardList2');
    if (searchValue.length === 0) {
      searchCardList.innerHTML = '';
      return;
    }
    searchCardList.innerHTML = string;
  }
}

async function findCitiesReg() {
  const cityInputReg = document.querySelector('#title-input3');
  const searchValue = cityInputReg.value.toLowerCase();

  const response = await fetch('/filterCity');
  if (response.ok) {
    const result = await response.json();
    let string = '';
    const resultArr = result.filter((el) => el.name.toLowerCase().indexOf(searchValue) === (0))
      .map((el) => el.name);

    for (let i = 0; i < resultArr.length; i += 1) {
      string += `<div onclick="selectCity2(this)">${resultArr[i]}</div>\n`;
    }
    const searchCityList = document.querySelector('#searchCityListReg');
    if (searchValue.length === 0) {
      searchCityList.innerHTML = '';
      return;
    }
    searchCityList.innerHTML = string;
  }
}

function selectCity(elem) {
  cityInput.value = elem.textContent;
  const searchCityList = document.querySelector('#searchCityList');
  searchCityList.innerHTML = '';
}

function selectCity2(elem) {
  cityInput.value = elem.textContent;
  const searchCityList = document.querySelector('#searchCityListReg');
  searchCityList.innerHTML = '';
}

function selectCard(elem) {
  cardInput.value = elem.textContent;
  const searchCardList = document.querySelector('#searchCardList');
  searchCardList.innerHTML = '';
}

function disableLists() {
  searchCityList.innerHTML = '';
  searchCardList.innerHTML = '';
}

function selectCardLk(elem) {
  const cardInputLk = document.querySelector('#cardSearchLk');
  cardInputLk.value = elem.textContent;
  const imageContainer = document.querySelector('.card-image-container');
  imageContainer.innerHTML = `<img id="tradeCardPic" src='/img/${elem.textContent}.png'>`;
  const searchCardList = document.querySelector('#searchCardList2');
  searchCardList.innerHTML = '';
}

function disableListLk() {
  const cardList = document.querySelector('#searchCardList2');
  cardList.innerHTML = '';
}

function deleteCityListReg() {
  const cityList = document.querySelector('#searchCityListReg');
  cityList.innerHTML = '';
}
