const $pizzaList = document.querySelector('#pizza-list');

const getPizzaList = () => {
  fetch('/api/users')
    .then(response => response.json())
    .then(pizzaListArr => {
      pizzaListArr; printPizza(pizzaListArr[0]); console.log(pizzaListArr[0])
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
