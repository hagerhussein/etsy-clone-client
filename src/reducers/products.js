import { CLOTHING_AND_SHOES_FETCHED, JEWELRY_AND_ACCESSORIES_FETCHED, HOME_AND_LIVING_FETCHED } from '../actions/products'

export default function (state = null, action) {
  switch(action.type) {
    case CLOTHING_AND_SHOES_FETCHED:
    return action.clothingAndShoes;
    case JEWELRY_AND_ACCESSORIES_FETCHED:
    return action.jewelryAndAccessories;
    case HOME_AND_LIVING_FETCHED:
      return action.homeAndLiving;
    default:
      return state
  }
}