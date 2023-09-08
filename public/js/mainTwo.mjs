import MainThreeMJS from './mainThree.mjs'

export default {

  testThree: function (message) {
    const messageResponse = message + " yes it does!"

    return (`
            <h1>${messageResponse}</h1>
            <h1>${MainThreeMJS("does this send to MainThreeMJS?")}</h1>
    `)
  },
}