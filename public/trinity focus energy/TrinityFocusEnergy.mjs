import Home from './platform components/home/Home.mjs'
import ActionBar from "./platform components/actionBar/ActionBar.mjs"





export default function TrinityFocusEnergy(hello_world) {
  const fromHtml = './trinity focus energy/'
  hello_world = "Hello World from TinityFocusEnergy"

  const testFunction = () => {

    if (isTrue === false) {
      isTrue = true
    } else {
      isTrue = false
    }

    if (isFalse === true) {
      isFalse = false
    } else {
      isFalse = true
    }

    registeredFunctions.retriggerRender()

  }

  let skip = 0
  let limit = 1

  let formData = {
    "eMail": "a@msn.com",
    "userName": "BBB",
    "password": "123456789",
    "newPassword": "987654321",
    "birthDate": "07/04/1776"
  }



if (argumentToFunction === undefined) {
  argumentToFunction = "hey"
}


const testIng = () => {

  return (`
  <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
    <h1 id='isTrue'>${isTrue}</h1>
    <h1 id='isFalse'>${isFalse}</h1>
    <h1 id='mayBe'>${registeredFunctions.stuff?._id}</h1>
    <section id='trinity-focus-energy-section' class='trinity-focus-energy-section'>

      ${isTrue === true ? (
      `<h1>Yes!!!!</h1>
      <h1 id='mayBe'>${argumentToFunction}</h1>`
    ) : (
      `<h1>No!!!!</h1>`
    )}

      ${isTrue === true ? (
      `<h1>Hell Yeah!!!!</h1>`
    ) : (
      ``
    )}
     
      ${Home()}
    </section >
    ${ActionBar()}
  </section >
`)
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
      pizzaListArr; registeredFunctions = {...registeredFunctions, stuff: pizzaListArr[0]}; console.log(pizzaListArr[0])
    })
    .catch(err => {
      console.log(err);
    });
};


registeredFunctions = { ...registeredFunctions, testFunction: testFunction, Home: Home }
getPizzaList()

// setTimeout(() => {
//   return testIng()

// }, 2000);

return testIng()






















  //   return (`
  //   <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
  //     <h1 id='isTrue'>${isTrue}</h1>
  //     <h1 id='isFalse'>${isFalse}</h1>
  //     <h1 id='mayBe'>${registeredFunctions.stuff?._id}</h1>
  //     <section id='trinity-focus-energy-section' class='trinity-focus-energy-section'>

  //       ${isTrue === true ? (
  //       `<h1>Yes!!!!</h1>`
  //     ) : (
  //       `<h1>No!!!!</h1>`
  //     )}

  //       ${isTrue === true ? (
  //       `<h1>Hell Yeah!!!!</h1>`
  //     ) : (
  //       ``
  //     )}
       
  //       ${Home()}
  //     </section >
  //     ${ActionBar()}
  //   </section >
  // `)
  





  
}
