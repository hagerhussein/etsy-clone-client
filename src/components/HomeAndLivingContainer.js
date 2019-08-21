import React from 'react'
import { loadHomeAndLiving } from '../actions/products'
import {connect} from 'react-redux'
import HomeAndLiving from './HomeAndLiving'


class HomeAndLivingContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadHomeAndLiving()
  }
  render() {
   return <HomeAndLiving homeAndLiving = {this.props.homeAndLiving} />
  }
}

const mapStateToProps = state => ({
  homeAndLiving: state.homeAndLiving
})

export default connect(mapStateToProps, {loadHomeAndLiving})(HomeAndLivingContainer)