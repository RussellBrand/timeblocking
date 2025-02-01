export function setupCounter(element) {
  let counter = 0
  console.log('made')
  const setCounter = (count) => {
    console.log('clicked')
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
