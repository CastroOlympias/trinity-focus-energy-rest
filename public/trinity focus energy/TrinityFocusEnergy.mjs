import Home from './platform components/home/Home.mjs'
import ActionBar from "./platform components/actionBar/ActionBar.mjs"


const testFunction = () => {

  console.log("Hello John")
}
registeredFunctions = { ...registeredFunctions, testFunction: testFunction }
export default function TrinityFocusEnergy(hello_world) {
  const fromHtml = './trinity focus energy/'
  hello_world = "Hello World from TinityFocusEnergy"

  return (`
    <section id='trinigy-focus-energy-body-section' class='body-section BackDrop-mediumGrey-theme'>
      <section id='trinity-focus-energy-section' class='trinity-focus-energy-section'>
        ${Home()}
      </section>
      ${ActionBar()}
    </section>
  `)
}