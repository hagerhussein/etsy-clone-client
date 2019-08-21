import React from 'react'
import { loadToysAndEntertain } from '../actions/products'
import {connect} from 'react-redux'
import ToysAndEntertainment from './ToysAndEntertainment'


class ToysAndEntertainmentContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadToysAndEntertain()
  }
  render() {
   return <ToysAndEntertainment toysAndEntertainment = {this.props.toysAndEntertainment} />
  }
}

const mapStateToProps = state => ({
  toysAndEntertainment: state.toysAndEntertainment
})

export default connect(mapStateToProps, {loadToysAndEntertain})(ToysAndEntertainmentContainer)