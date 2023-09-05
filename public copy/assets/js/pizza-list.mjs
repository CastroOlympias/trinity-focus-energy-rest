// const $pizzaList = document.querySelector('#pizza-list');
// let skip = 0
// let limit = 1
// console.log($pizzaList)
// let formData = {
//   "eMail": "a@msn.com",
//   "userName": "BBB",
//   "password": "123456789",
//   "newPassword": "987654321",
//   "birthDate": "07/04/1776"
// }

// const getPizzaList = () => {
//   fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(response => response.json(skip, limit))
//     .then(pizzaListArr => {
//       pizzaListArr; printPizza(pizzaListArr[0]); console.log(pizzaListArr[0])
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const printPizza = ({ eMail, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
//   const pizzaCard = `
//     <div class="col-12 col-lg-6 flex-row">
//       <div class="card w-100 flex-column">
//         <h3 class="card-header">${eMail}</h3>
//         <div class="card-body flex-column col-auto">
//           <h4 class="text-dark">By ${createdBy}</h4>
//           <p>On ${createdAt}</p>
//           <p>${commentCount} Comments</p>
//           <h5 class="text-dark">Suggested Size: ${eMail}
//           <h5 class="text-dark">Toppings</h5>
//         <h6>testing</h6>
//           <a class="btn display-block w-100 mt-auto" href="/pizza?id=${eMail}">See the discussion.</a>
//         </div>
//       </div>
//     </div>
//   `;

//   $pizzaList.innerHTML += pizzaCard;
// };


// getPizzaList();



const $pizzaList = document.querySelector('#pizza-list');

const getPizzaList = () => {
  fetch('/api/users')
    .then(response => response.json())
    .then(pizzaListArr => {
      pizzaListArr.forEach(printPizza);
    })
    .catch(err => {
      console.log(err);
    });
};

const printPizza = ({ _id, pizzaName, toppings, size, commentCount, createdBy, createdAt }) => {
  const pizzaCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${pizzaName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">By ${createdBy}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">Suggested Size: ${size}
          <h5 class="text-dark">Toppings</h5>
          <ul>
            ${toppings
      .map(topping => {
        return `<li>${topping}</li>`;
      })
      .join('')}
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/pizza?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $pizzaList.innerHTML += pizzaCard;
};
console.log('sjdfjsjdfjsdjf')
getPizzaList();
const worker = new Worker("./worker.js")


// const { TheWorker } = require('./worker.js')
const workerBtn = document.getElementById("workerBtn")

workerBtn.addEventListener('click', function () {

  const first = "first"
  const second = "second"
  worker.postMessage({ first, second });
  console.log(workerBtn)
})


