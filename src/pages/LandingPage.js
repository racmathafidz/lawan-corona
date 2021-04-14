import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import CountryStatistic from 'parts/CountryStatistic'

import { fetchCountry } from 'store/actions/country'
import { fetchDate } from 'store/actions/date'

class LandingPage extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0)

        if (this.props.country === null && this.props.date === null) {
            this.props.fetchCountry()
            this.props.fetchDate()
        }
    }

    render() {

        if (this.props.country === null && this.props.date === null) {
            return (
                <div>
                    <Header {...this.props}/>
                    <Hero {...this.props}/>
                </div>
            )
        }

        return (
            <div>
                <Header {...this.props}/>
                <Hero {...this.props}/>
                <CountryStatistic data={this.props.country[0]} date={this.props.date} withButton/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.country,
    date: state.date
})

export default connect( mapStateToProps, {fetchCountry, fetchDate})(LandingPage)
