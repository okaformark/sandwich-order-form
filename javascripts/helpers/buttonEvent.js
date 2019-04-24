import price from './price.js';
import util from './util.js';
import veggie from '../components/veggie.js';
import meat from '../components/meat.js';

// const meatOptions = [];
// const veggieOptions = [];
// const cheeseOptions = [];
// const condimentOptions = [];
// const breadOption = '';

// const ingredientValue = () => {
//     document.getElementsByName(value);
// };

// const addMeat = () => {
//     let meatType = [];
//     ingredientValue(meatType);
//     for (let i = 0; i < meatType.length; i++){
//         if (meatType[i].type === 'checkbox' || meatType[i].checked === true){
//             meatOptions.push(meatType[i].value);
//         }
//     }
//     return meatOptions;
// };
let totalPrice = 0;
const arrayMenu = [];

const marksFunction = (e) => {
    // e.preventDefault();
    const test = e.target;
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.id;
    if(test.checked === true){
        arrayMenu.push(value);
        if (name === 'meat'){
            totalPrice += price.addMeat(value);
            console.log(arrayMenu, totalPrice);
        }
        else if (name === 'veggie'){
            totalPrice += price.addVeggie(value);
            console.log(arrayMenu, totalPrice);
        }
        else if (name === 'condiment'){
            totalPrice += price.addCondiment(value);
            console.log(arrayMenu, totalPrice);
        }
        else if (name === 'cheese'){
            if(id === 'none' && name === 'cheese'){
                totalPrice -= price.addCheese(value);
                console.log(arrayMenu, totalPrice);
            }
            totalPrice += price.addCheese(value);
            console.log(arrayMenu, totalPrice);
        }
        else if (name === 'Bread'){
            totalPrice += price.addBread(value);
            console.log(arrayMenu, totalPrice);
        }
       
       
    }else if (test.checked === false) {
        let index = arrayMenu.indexOf(value);
        arrayMenu.splice(index, 1);
        if (name === 'meat'){
            totalPrice -= price.addMeat(value);
        }
        else if (name === 'veggie'){
            totalPrice -= price.addVeggie(value);
        }
        else if (name === 'condiment'){
            totalPrice -= price.addCondiment(value);
        }
        else if (name === 'cheese'){
            totalPrice -= price.addCheese(value);
        }
        else if (name === 'bread'){
            totalPrice -= price.addBread(value);
        }
    }
    
}


const addEventListener = () => {
    let selectedMenu = document.getElementsByClassName('menu-selected');
    for (let i = 0; i < selectedMenu.length; i++){
        selectedMenu[i].addEventListener('click', marksFunction);
    }
};

const totalPriceGetter = () => {
    const newPrice = totalPrice;
    return newPrice;
};

export default { addEventListener, arrayMenu, totalPriceGetter };
