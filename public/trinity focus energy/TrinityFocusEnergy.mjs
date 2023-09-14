import Home from './platform components/home/Home.mjs'
import ActionBar from "./platform components/actionBar/ActionBar.mjs"


const testFunction = () => {
  console.log("Hello John", isTrue)
  const first = document.getElementById('isTrue')
  first.textContent = "true"
  const second = document.getElementById('isFalse')

  const third = document.getElementById('trinigy-focus-energy-body-section')
  third.className = 'body-section BackDrop-mediumGrey-theme plusAnother'
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

  console.log("Hello John", isTrue)

  // const elemnetIsTrue = document.getElementById('isTrue')
  // elemnetIsTrue.textContent = isTrue
  const body = document.getElementById('body')
  registeredFunctions.retriggerRender(body)
}

// console.log(DOM[0].children[1].children)

export default function TrinityFocusEnergy(hello_world) {
  const fromHtml = './trinity focus energy/'
  hello_world = "Hello World from TinityFocusEnergy"


  // setTimeout(() => {
  //   if (isTrue === false) {
  //     isTrue = true
  //   }
  //   console.log('jdjdjdjdjdjdjdjdjdjd')
  // }, 2000)

  registeredFunctions = { ...registeredFunctions, testFunction: testFunction, Home: Home }
  console.log(isTrue)
  return (`
      <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
      <h1 id='isTrue'>${isTrue}</h1>
      <h1 id='isFalse'>${isFalse}</h1>
        <section id='trinity-focus-energy-section' class='trinity-focus-energy-section'>
        
          ${isTrue === true ? (
      `<h1>Hello!!!!</h1>`
    ) : (
      `<h1>No!!!!</h1>`
    )}

          ${Home()}
        </section >
        ${ActionBar()}
      </section >
    `)
}




//   return (`
//   <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
//     <section id='trinity-focus-energy-section' class='trinity-focus-energy-section'>
//     ${isTrue === true ? (
//     `<h1>Hello!!!!</h1>`
//   ) : (
//     `<h1>No!!!!</h1>`
//   )}

//       ${Home()}
//     </section >
// ${ActionBar()}
//   </section >
// `)
