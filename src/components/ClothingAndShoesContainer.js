import React from 'react'
import {loadClothingAndShoes} from '../actions/products'
import {connect} from 'react-redux'
import ClothingAndShoes from './ClothingAndShoes'


class ClothingAndShoesContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadClothingAndShoes()
  }
  render() {
   return <ClothingAndShoes clothingAndShoes = {this.props.clothingAndShoes} />
  }
}

const mapStateToProps = state => ({
  clothingAndShoes: state.clothingAndShoes
})

export default connect(mapStateToProps, {loadClothingAndShoes})(ClothingAndShoesContainer)