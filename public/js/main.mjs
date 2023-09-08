import anothertest from './mainTwo.mjs'

export default {


  testOne: function (testerOne) {
    const indexBodyId = document.getElementById('indexBodyId')
    const array = ['abc', 'efg', 'ghi']
    console.log('test one')
    console.log(testerOne, array, indexBodyId)


    const FTS = 'Fuck this Shit!'
    return (`
    <section>
      <div>
        <h1>${FTS}</h1>
        <ul>
          ${array
        .map(theArray => {
          return `<li>${theArray}</li>`;
        }).join('')}
        </ul>
      </div>
    </section>
    `)
      +
      (`
        <ul>
        <h1>Test me mudda chucka</h1>
        <h2>${anothertest.testThree('does this string pass through?')}</h2>
        </ul>
      `)
  },

  testTwo: function (testerTwo) {
    console.log('test two')
    console.log(testerTwo)
  },
}

