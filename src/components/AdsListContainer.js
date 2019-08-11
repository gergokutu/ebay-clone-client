import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdsList from './AdsList'
import { getAds } from '../actions'

class AdsListContainer extends Component {

  componentDidMount() {
    this.props.getAds()
  }

  render() {
    console.log('AdsListContainer this.props:', this.props.ads)
    return (
      <AdsList adslist={this.props.ads}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    ads: state.adsList
  }
}

const mapDispatchToProps = {
  getAds
}

export default connect(mapStateToProps, mapDispatchToProps)(AdsListContainer)