import readline from 'readline-sync';
import { showError } from './showError.js'

const VEG_ITEMS = [
  'Veg Biryani        = 100',
  'Veg Fried Rice     =  70',
  'Upma               =  30'
];

const NON_VEG_ITEMS = [
  'Chicken Biryani    = 100',
  'Mutton Biryani     = 150',
  'Fish Biryani       = 160',
];

const DESERTS_ITEM = [
  'ICE CREAM          = 50',
  'Chocolate          = 40',
];

const BEVERAGES_ITEMS = [
  'Pepsi              = 20',
  'Coke               = 20'
];

const FOOD_ITEMS = {
  'Veg': VEG_ITEMS,
  'Non-Veg': NON_VEG_ITEMS,
  'Deserts': DESERTS_ITEM,
  'Beverages': BEVERAGES_ITEMS
}


export function showMenuItems(category) {
  const menuItems = FOOD_ITEMS[category];
  if(menuItems) {
    const menuItemIndex = readline.keyInSelect(menuItems);
    const selectedItem = menuItems[menuItemIndex];
    return selectedItem;
  } else {
    showError();
  }
}