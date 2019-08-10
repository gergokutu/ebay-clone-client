import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdsList from './AdsList'

class AdsListContainer extends Component {

  render() {
    return (
      <AdsList list={this.props}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    ads: state.adsList
  }
}

export default connect(mapStateToProps)(AdsListContainer)