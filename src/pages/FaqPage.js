/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Faq from 'parts/Faq';
import Footer from 'parts/Footer';

import dataJson from 'json/resource.json';

export default class FaqPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Faq data={dataJson.faq} />
        <Footer {...this.props} />
      </>
    );
  }
}
