let testText = 'test';

export default function DOMUpdater(DOM_VERSIONS) {
    let START_ELEMENT_MAP_OF_CURRENT_DOM = []
    let END_ELEMENT_MAP_OF_CURRENT_DOM = []
    let BEGINNING_OF_ELEMENT_TEXT_OF_CURRENT_DOM = []
    let END_OF_ELEMENT_TEXT_OF_CURRENT_DOM = []


    // let START_ELEMENT_MAP_OF_CHANGED_DOM = []
    // let END_ELEMENT_MAP_OF_CHANGED_DOM = []
    // let BEGINNING_OF_ELEMENT_TEXT_OF_CHANGED_DOM = []
    // let END_OF_ELEMENT_TEXT_OF_CHANGED_DOM = []

    // let V_DOM_ARRAY = []

    // let CURRENT_DOM_AS_OBJECTS = []
    // let CHANGED_DOM_AS_OBJECTS = []

    let testing = DOM_VERSIONS?.CHANGED_DOM

    // let otherTesting = testing.split('\\n')

    let PREVIOUS_VIRTUAL_DOM = []
    let NEW_VITUAL_DOM = []

    // console.log(otherTesting)
    // otherTesting = JSON.stringify(otherTesting).replace(/\\\\\\"/g, "")

    for (let indexOfDOMObjects = 0; indexOfDOMObjects < DOM_VERSIONS?.CURRENT_DOM.split('\\n').length; indexOfDOMObjects++) {
        // console.log(JSON.stringify(DOM_VERSIONS?.CURRENT_DOM.split('\\n')[indexOfDOMObjects]).replace(/\\\\\\"/g, ""))
        PREVIOUS_VIRTUAL_DOM.push(JSON.stringify(DOM_VERSIONS?.CURRENT_DOM.split('\\n')[indexOfDOMObjects]).replace(/\\\\\\"/g, ""))
    }






    for (let indexOfDOMObjects = 0; indexOfDOMObjects < DOM_VERSIONS?.CHANGED_DOM.split('\\n').length; indexOfDOMObjects++) {
        // console.log(JSON.stringify(DOM_VERSIONS?.CHANGED_DOM.split('\\n')[indexOfDOMObjects]).replace(/\\\\\\"/g, ""))
        NEW_VITUAL_DOM.push(JSON.stringify(DOM_VERSIONS?.CHANGED_DOM.split('\\n')[indexOfDOMObjects]).replace(/\\\\\\"/g, ""))
    }
    console.log(API_DATA?.this_data)
    // console.log('Previous DOM', PREVIOUS_VIRTUAL_DOM)
    // console.log('New DOM', NEW_VITUAL_DOM)











    // console.log(otherTesting)
    // for (let i = 0; i < JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).length; i++) {
    //     if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '<') {
    //         START_ELEMENT_MAP_OF_CURRENT_DOM.push(i)
    //         END_OF_ELEMENT_TEXT_OF_CURRENT_DOM.push(i)
    //     }
    //     if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '>') {
    //         END_ELEMENT_MAP_OF_CURRENT_DOM.push(i)
    //         BEGINNING_OF_ELEMENT_TEXT_OF_CURRENT_DOM.push(i)
    //     }
    // }

    // END_OF_ELEMENT_TEXT_OF_CURRENT_DOM = END_OF_ELEMENT_TEXT_OF_CURRENT_DOM.splice(1)

    // console.log(END_OF_ELEMENT_TEXT_OF_CURRENT_DOM)
    // console.log('START OF TEXT', BEGINNING_OF_ELEMENT_TEXT_OF_CURRENT_DOM)
    // console.log('END OF TEXT', END_OF_ELEMENT_TEXT_OF_CURRENT_DOM)


    // console.log(BEGINNING_OF_ELEMENT_TEXT_OF_CURRENT_DOM.length)
    // console.log('<h1 id=trinigy-focus-energy-body-section class=body-section BackDrop-mediumGrey-theme>Can I Get Some Text, Please?</h1>'.slice(86, 114))
    // console.log('"\"\\n  <section id=\\\"trinigy-focus-energy-body-section\\\" class=\\\"body-section BackDrop-mediumGrey-theme\\\">\\n    <h1 id=\\\"isTrue\\\">'.length)

    // for (let j = 0; j < START_ELEMENT_MAP_OF_CURRENT_DOM.length; j++) {
    //     CURRENT_DOM_AS_OBJECTS.push(JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).slice(START_ELEMENT_MAP_OF_CURRENT_DOM[j], END_ELEMENT_MAP_OF_CURRENT_DOM[j] + 1).replace(/\\\\\\"/g, ""))
    // }

    // for (let k = 0; k < JSON.stringify(DOM_VERSIONS?.CHANGED_DOM).length; k++) {
    //     if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '<') {
    //         START_ELEMENT_MAP_OF_CHANGED_DOM.push(k)
    //     }
    //     if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '>') {
    //         END_ELEMENT_MAP_OF_CHANGED_DOM.push(k)
    //     }
    //     if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '>') {
    //         BEGINNING_OF_ELEMENT_TEXT_OF_CHANGED_DOM.push(k)
    //     }
    //     if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '<') {
    //         END_OF_ELEMENT_TEXT_OF_CHANGED_DOM.push(k)
    //     }
    // }

    // for (let l = 0; l < START_ELEMENT_MAP_OF_CHANGED_DOM.length; l++) {

    //     CHANGED_DOM_AS_OBJECTS.push(JSON.stringify(DOM_VERSIONS?.CHANGED_DOM).slice(START_ELEMENT_MAP_OF_CHANGED_DOM[l], END_ELEMENT_MAP_OF_CHANGED_DOM[l] + 1).replace(/\\\\\\"/g, ""))
    // }

    // console.log("Previous DOM")
    // console.log(CURRENT_DOM_AS_OBJECTS)
    // console.log("New DOM")
    // console.log(CHANGED_DOM_AS_OBJECTS)

    // body.innerHTML = registeredFunctions.TrinityFocusEnergy()

}