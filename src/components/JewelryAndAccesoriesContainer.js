import React from 'react'
import { loadJewelryAndAccessories } from '../actions/products'
import {connect} from 'react-redux'
import JewelryAndAccessories from './JewelryAndAccessories'


class JewelryAndAccessoriesContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadJewelryAndAccessories()
  }
  render() {
   return <JewelryAndAccessories jewelryAndAccessories = {this.props.jewelryAndAccessories} />
  }
}

const mapStateToProps = state => ({
  jewelryAndAccessories: state.jewelryAndAccessories
})

export default connect(mapStateToProps, {loadJewelryAndAccessories})(JewelryAndAccessoriesContainer)