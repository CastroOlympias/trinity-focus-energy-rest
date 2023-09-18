let testText = 'test';

export default function DOMUpdater(DOM_VERSIONS) {
    let START_ELEMENT_MAP_OF_CURRENT_DOM = []
    let END_ELEMENT_MAP_OF_CURRENT_DOM = []
    let START_ELEMENT_MAP_OF_CHANGED_DOM = []
    let END_ELEMENT_MAP_OF_CHANGED_DOM = []



    let BEGINNING_OF_ELEMENT_TEXT = []
    let END_OF_ELEMENT_TEXT = []
    let CURRENT_DOM_AS_OBJECTS = []
    let CHANGED_DOM_AS_OBJECTS = []
    // console.log('Current DOM and Length', DOM_VERSIONS?.CURRENT_DOM.length)
    // console.log(DOM_VERSIONS?.CURRENT_DOM)
    // console.log('New DOM and Length', DOM_VERSIONS?.CHANGED_DOM.length)
    // console.log(DOM_VERSIONS?.CHANGED_DOM)
    // CURRENT_DOM_AS_OBJECTS = []


    for (let i = 0; i < JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).length; i++) {
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '<') {
            START_ELEMENT_MAP_OF_CURRENT_DOM.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '>') {
            END_ELEMENT_MAP_OF_CURRENT_DOM.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '>') {
            BEGINNING_OF_ELEMENT_TEXT.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '<') {
            END_OF_ELEMENT_TEXT.push(i)
        }
    }

    for (let j = 0; j < START_ELEMENT_MAP_OF_CURRENT_DOM.length; j++) {

        CURRENT_DOM_AS_OBJECTS.push(JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).slice(START_ELEMENT_MAP_OF_CURRENT_DOM[j], END_ELEMENT_MAP_OF_CURRENT_DOM[j] + 1).replace(/\\\\\\"/g, ""))
    }

    for (let k = 0; k < JSON.stringify(DOM_VERSIONS?.CHANGED_DOM).length; k++) {
        if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '<') {
            START_ELEMENT_MAP_OF_CHANGED_DOM.push(k)
        }
        if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '>') {
            END_ELEMENT_MAP_OF_CHANGED_DOM.push(k)
        }
        if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '>') {
            BEGINNING_OF_ELEMENT_TEXT.push(k)
        }
        if (JSON.stringify(DOM_VERSIONS?.CHANGED_DOM)[k] === '<') {
            END_OF_ELEMENT_TEXT.push(k)
        }
    }

    for (let l = 0; l < START_ELEMENT_MAP_OF_CHANGED_DOM.length; l++) {

        CHANGED_DOM_AS_OBJECTS.push(JSON.stringify(DOM_VERSIONS?.CHANGED_DOM).slice(START_ELEMENT_MAP_OF_CHANGED_DOM[l], END_ELEMENT_MAP_OF_CHANGED_DOM[l] + 1).replace(/\\\\\\"/g, ""))
    }
    const getElementCountFromBody = document.getElementById('body')
    console.log((getElementCountFromBody).childElementCount)


    console.log("Previous DOM")
    console.log(CURRENT_DOM_AS_OBJECTS)
    console.log("New DOM")
    console.log(CHANGED_DOM_AS_OBJECTS)

    return 'aslkdfjasldkfaslkdjf'

}