// Fetch the items from the JSON file (아이템 동적으로 받아옴)
function loadItems() {
    return fetch('data/data.json') //fetch라는 것을 이용해서 데이터를 받아온 뒤
    .then(response => response.json()) //받아온 데이터가 성공적이면 json으로 변환하고
    .then(json => json.items); // json 안에있는 items를 리턴하게 됨

}

//Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join(''); //각각의 item 태글르 li태그로 변환
}

//Create HTML list item from the given data item
function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.img}" alt="${item.type}" class="item__thumbnail"/>
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
        `;
}

//handle button click
function onButtonClick(event, items) { //html에서 작성한 게 이벤트에 추가되어 나옴
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    const filtered = items.filter(item => item[key] ===value);
    console.log(filtered);

    displayItems(filtered);
}


function setEventListners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items)); //로고클릭시 모든 아이템들 보여줌
    buttons.addEventListener('click', event => onButtonClick(event, items)); //버튼이 클릭되면 이벤트 처리
}
//main
loadItems()
.then(items => {
    console.log(items); //받아온 items 출ㄹ력
    displayItems(items);
    setEventListners(items); /*버튼 누르면 필터링*/
}) /*프로미스가 성공적으로 될 때 아이템 받아옴 */
.catch(console.log); /*실패할 때 */