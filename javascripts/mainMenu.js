import buttonEvents from './helpers/buttonEvent.js';
import util from './helpers/util.js';

const makeSandwich = () => {
  let domString = '';
  buttonEvents.arrayMenu.forEach((menu) => {
    domString += `<div class = " card-body row">`;
    domString += `<h1>${menu}</h1>`;
    domString += `</div>`;
  });
  domString += `<h1>${buttonEvents.totalPriceGetter()}</h1>`;
  util.printToDom('cart', domString);
}

const makeSandwichBtn = () => {
  document.querySelector('#sandwich-btn').addEventListener('click', makeSandwich);
}

export default { makeSandwichBtn };