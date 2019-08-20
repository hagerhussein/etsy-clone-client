import request from 'superagent'

export const CLOTHING_AND_SHOES_FETCHED = 'CLOTHING_AND_SHOES_FETCHED'
export const JEWELRY_AND_ACCESSORIES_FETCHED ='JEWELRY_AND_ACCESSORIES_FETCHED'


const baseUrl = 'http://localhost:4000'

const clothingAndShoesFetched = clothingAndShoes => ({
  type: CLOTHING_AND_SHOES_FETCHED, 
  clothingAndShoes
})

const jewelryAndAccessoriesFetched = jewelryAndAccessories => ({
  type: JEWELRY_AND_ACCESSORIES_FETCHED , 
  jewelryAndAccessories
})

export const loadClothingAndShoes = () => (dispatch, getState) => {
  if (getState().clothingAndShoes) return

  request(`${baseUrl}/clothing-and-shoes`)
    .then(response => {
      dispatch(clothingAndShoesFetched(response.body.products))
    })
    .catch(console.error)
}

export const loadJewelryAndAccessories = () => (dispatch, getState) => {
  if (getState().jewelryAndAccessories) return

  request(`${baseUrl}/jewelry-and-accessories`)
    .then(response => {
      dispatch(jewelryAndAccessoriesFetched(response.body.products))
    })
    .catch(console.error)
}