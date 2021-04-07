import React, { Component } from 'react'

import Header from 'parts/Header'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        )
    }
}
