const $pizzaList = document.querySelector('#pizza-list');
let skip = 0
let limit = 1

let formData = {
  "eMail": "a@msn.com",
  "userName": "BBB",
  "password": "123456789",
  "newPassword": "987654321",
  "birthDate": "07/04/1776"
}

const getPizzaList = () => {
  fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json(skip, limit))
    .then(pizzaListArr => {
      pizzaListArr; printPizza(pizzaListArr[1]); console.log(pizzaListArr[1])
    })
    .catch(err => {
      console.log(err);
    });
};

const printPizza = ({ eMail, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${eMail}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Size: ${eMail}
          <h5 class="text-dark">Toppings</h5>
        <h6>testing</h6>
          <a class="btn display-block w-100 mt-auto" href="/pizza?id=${eMail}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};


getPizzaList();

