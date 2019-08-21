import React from 'react'
import { loadCraftSuppliesAndTools } from '../actions/products'
import {connect} from 'react-redux'
import CraftSuppliesAndTools from './CraftSuppliesAndTools'


class CraftSuppliesAndToolsContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadCraftSuppliesAndTools()
  }
  render() {
   return <CraftSuppliesAndTools craftSuppliesAndTools = {this.props.craftSuppliesAndTools} />
  }
}

const mapStateToProps = state => ({
  craftSuppliesAndTools: state.craftSuppliesAndTools
})

export default connect(mapStateToProps, {loadCraftSuppliesAndTools})(CraftSuppliesAndToolsContainer)