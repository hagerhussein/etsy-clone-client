import React from 'react'
import { loadArtAndCollect } from '../actions/products'
import {connect} from 'react-redux'
import ArtAndCollectibles from './ArtAndCollectibles'


class ArtAndCollectiblesContainer extends React.PureComponent {
  componentDidMount(){
    this.props.loadArtAndCollect()
  }
  render() {
   return <ArtAndCollectibles artAndCollectibles = {this.props.artAndCollectibles} />
  }
}

const mapStateToProps = state => ({
  artAndCollectibles: state.artAndCollectibles
})

export default connect(mapStateToProps, {loadArtAndCollect})(ArtAndCollectiblesContainer)