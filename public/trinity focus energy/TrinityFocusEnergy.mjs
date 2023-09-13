import Home from './platform components/home/Home.mjs'
import ActionBar from "./platform components/actionBar/ActionBar.mjs"


const testFunction = () => {
  console.log("Hello John", isTrue)
  if (isTrue === false) {
    isTrue = true
  }
  // if (isTrue === true) {
  //   isTrue = false
  // }
  console.log("Hello John", isTrue)
  registeredFunctions.renderFunction()
  // const elemnetIsTrue = document.getElementById('isTrue')
  // elemnetIsTrue.textContent = isTrue
}

// console.log(DOM[0].children[1].children)

export default function TrinityFocusEnergy(hello_world) {
  const fromHtml = './trinity focus energy/'
  hello_world = "Hello World from TinityFocusEnergy"

  const renderFunction = () => {
    setTimeout(() => {
      if (isTrue === false) {
        isTrue = true
      }
      console.log('jdjdjdjdjdjdjdjdjdjd')
    }, 2000)


    console.log(isTrue)
    return (`
      <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
      <h1 id='isTrue'>${isTrue}</h1>
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

  registeredFunctions = { ...registeredFunctions, testFunction: testFunction, renderFunction: renderFunction }
  return renderFunction()


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
}