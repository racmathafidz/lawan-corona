/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import CountryStatistic from 'parts/CountryStatistic';
import Gejala from 'parts/Gejala';
import Protokol from 'parts/Protokol';
import Konsultasi from 'parts/Konsultasi';
import Footer from 'parts/Footer';
import Loading from 'pages/Loading';

import jsonData from 'json/resource.json';

import { fetchCountry } from 'store/actions/country';
import { fetchDate } from 'store/actions/date';

class LandingPage extends Component {
//   constructor(props) {
//     super(props);
//   }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.country && !this.props.date) {
      this.props.fetchCountry();
      this.props.fetchDate();
    }
  }

  render() {
    if (!this.props.country || !this.props.date) {
      return (
        <>
          <Loading />
        </>
      );
    }

    return (
      <>
        <Header {...this.props} />
        <Hero {...this.props} />
        <CountryStatistic data={this.props.country[0]} date={this.props.date} withButton />
        <Gejala data={jsonData.gejala} />
        <Protokol data={jsonData} />
        <Konsultasi {...this.props} />
        <Footer {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.country,
  date: state.date,
});

export default connect(mapStateToProps, { fetchCountry, fetchDate })(LandingPage);
