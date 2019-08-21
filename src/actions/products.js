import request from 'superagent'

export const CLOTHING_AND_SHOES_FETCHED = 'CLOTHING_AND_SHOES_FETCHED'
export const JEWELRY_AND_ACCESSORIES_FETCHED ='JEWELRY_AND_ACCESSORIES_FETCHED'
export const HOME_AND_LIVING_FETCHED ='HOME_AND_LIVING_FETCHED'


const baseUrl = 'http://localhost:4000'

const clothingAndShoesFetched = clothingAndShoes => ({
  type: CLOTHING_AND_SHOES_FETCHED, 
  clothingAndShoes
})

const jewelryAndAccessoriesFetched = jewelryAndAccessories => ({
  type: JEWELRY_AND_ACCESSORIES_FETCHED , 
  jewelryAndAccessories
})

const homeAndLivingFetched = homeAndLiving => ({
  type: HOME_AND_LIVING_FETCHED,
  homeAndLiving
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

export const loadHomeAndLiving = () => (dispatch, getState) => {
  if (getState().homeAndLiving) return

  request(`${baseUrl}/home-and-living`)
    .then(response => {
      dispatch(homeAndLivingFetched(response.body.products))
    })
    .catch(console.error)
}