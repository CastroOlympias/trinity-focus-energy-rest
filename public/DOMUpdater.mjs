let testText = 'test';

export default function DOMUpdater(DOM_VERSIONS) {
    let START_ELEMENT_MAP = []
    let END_ELEMENT_MAP = []
    let BEGINNING_OF_ELEMENT_TEXT = []
    let END_OF_ELEMENT_TEXT = []
    let CURRENT_DOM_AS_OBJECTS = []
    // console.log('Current DOM and Length', DOM_VERSIONS?.CURRENT_DOM.length)
    // console.log(DOM_VERSIONS?.CURRENT_DOM)
    // console.log('New DOM and Length', DOM_VERSIONS?.CHANGED_DOM.length)
    // console.log(DOM_VERSIONS?.CHANGED_DOM)
    // CURRENT_DOM_AS_OBJECTS = []


    for (let i = 0; i < JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).length; i++) {
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '<') {
            START_ELEMENT_MAP.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '>') {
            END_ELEMENT_MAP.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '>') {
            BEGINNING_OF_ELEMENT_TEXT.push(i)
        }
        if (JSON.stringify(DOM_VERSIONS?.CURRENT_DOM)[i] === '<') {
            END_OF_ELEMENT_TEXT.push(i)
        }
    }

    for (let j = 0; j < START_ELEMENT_MAP.length; j++) {

        CURRENT_DOM_AS_OBJECTS.push(JSON.stringify(DOM_VERSIONS?.CURRENT_DOM).slice(START_ELEMENT_MAP[j], END_ELEMENT_MAP[j] + 1).replace(/\\\\\\"/g, ""))
    }




  
    console.log(CURRENT_DOM_AS_OBJECTS)


    return 'aslkdfjasldkfaslkdjf'

}