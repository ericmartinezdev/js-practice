// Promise object is equivalent to making an actual promise. ex... 
// I promise to make the best pizza.
// if variable pizza equals best then the resolve function is ran.
// if variable pizza does not equal best then the reject function is ran.

let p = new Promise((resolve, reject) => {
  let pizza = 'worst'
  if (pizza == 'best') {
    resolve('This is the Best Pizza :)')
  } else {
    reject('This is not the Best Pizza :(')
  }
})

// this is how we interact with promises
// then is ran when the resolve function above is ran
// catch is ran when the reject function is ran
p.then((message) => {
  console.log('This is in the then - ' + message)
}).catch((message) => {
  console.log('This is in the catch ' + message)
})