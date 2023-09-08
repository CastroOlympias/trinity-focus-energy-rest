// These getElements are hardcoded html elements and are global for any script to use to append new a script from any script file. The id is to only load directly, into the html file, only one script which is index.js script, from all other scripts and child elements append will be handled, thus creating loading dynamic sections, componenetes, styles into a single page application, only loading user requested components and associated files

// the purpose of this index.js file is load only <script> elements, from which those <script> elements bring with them the functions, features and design of their relevant parts, styles and addtional elements that make of the applcation that are then appended to <main>, <section> or <body> elemements

// Primarily, elements IDs will be used for feature and functionality, classes will be used for styling. There maybe exceptions do for the need if flipping class or ID names to simulatie states for loading certian elements, like the nav bar elememnt, which changes from open to closed, that is then handled by an if function whereby it is determined to either create the applist modal or remove it.

// Styles of child element/componenets need to be loaded first in the parent component else styleing delay on componenet load will occur

// Element creations need to stay globally scoped as, when using an if statement for when to remove the element, the else { elment.remove() } doesn't have visbility to the globally defined element, and thus doesn't remove the element. eg. button click of appList creates mutiple isntances of the appListModal <script? element and doesn't remove any upon the closing of the modal

// <script> elements which are to load js files that load elemement into the body, need to be decalred in the parent element of the child elements
// import Test from './script'
// import Authentication from './Authentication.js'
import test from './js/main.mjs'
const helpMe = "I'm helpign you!"
const testerOne = "Are you helping me?"
const testerTwo = "Yes, I'm helping you!"
// test(testerOne, testerTwo)
// test.testOne(testerOne)
const thisTest = test.testOne(testerOne)
console.log(thisTest)
test.testTwo(testerTwo)
// const mainJs = import('./js/main')
const DOMRefreshTimer = 500
const navModalFadeOutTimer = 500
const modalOpenDelayTimer = 30

const indexHtmlId = document.getElementById('indexHtmlId')
const indexHeadId = document.getElementById('indexHeadId');
const indexBodyId = document.getElementById('indexBodyId')
const indexBodyClass = document.getElementsByClassName('indexBodyClass test');
const newElement = document.createElement('section')
indexBodyId.append(newElement)
const navBarCss = document.createElement('link')
navBarCss.rel = 'stylesheet';
navBarCss.href = './globalComponents/navBar/navBar.css';
indexHeadId.append(navBarCss)

const indexNavBar = document.createElement('script');
indexNavBar.setAttribute('src', './globalComponents/navBar/navBar.js')
indexBodyId.append(indexNavBar)
indexBodyId.innerHTML = `${thisTest}`

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


};


getPizzaList();



