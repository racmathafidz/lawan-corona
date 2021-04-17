import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import CountryStatistic from 'parts/CountryStatistic'
import ProvinceStatistic from 'parts/ProvinceStatistic'
import Footer from 'parts/Footer'
import Loading from 'pages/Loading'

import { fetchCountry } from 'store/actions/country'
import { fetchProvince } from 'store/actions/province'
import { fetchDate } from 'store/actions/date'

class StatistikPage extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0)

        if(!this.props.province){
            this.props.fetchProvince()
        }

        if (!this.props.country && !this.props.date) {
            this.props.fetchCountry()
            this.props.fetchDate()
        }
    }

    render() {

        if (!this.props.country || !this.props.date || !this.props.province) {
            return (
                <>
                    <Loading/>
                </>
            )
        }

        return (
            <>
                <Header {...this.props}/>
                <CountryStatistic data={this.props.country[0]} date={this.props.date}/>
                <ProvinceStatistic data={this.props.province.data} date={this.props.date}/>
                <Footer {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    country: state.country,
    date: state.date,
    province: state.province
})

export default connect( mapStateToProps, { fetchCountry, fetchProvince, fetchDate })(StatistikPage)
