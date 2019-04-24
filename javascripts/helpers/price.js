import bread from '../components/bread.js';
import cheese from '../components/cheese.js';
import condiment from '../components/condiment.js';
import meat from '../components/meat.js';
import veggie from '../components/veggie.js';

const addCondiment = (condimentOption) => {
  let objCondiment = condiment.getCondiment();
  let price = objCondiment[condimentOption]
  return price;
};

const addBread = (breadOption) => {
  let objBread = bread.getBread();
  let price = objBread[breadOption];
  return price;
};

const addMeat = (meatOption) => {
  let objMeat = meat.getMeat();
  let price = objMeat[meatOption];
  return price;
};

const addVeggie= (veggieOption) => {
  let objVeggie = veggie.getVeggie();
  let price = objVeggie[veggieOption];
  return price;
};

const addCheese = (cheeseOption) => {
  let objCheese = cheese.getCheese();
  let price = objCheese[cheeseOption];
  return price;
};
export default { addMeat, addBread, addCheese, addVeggie, addCondiment };