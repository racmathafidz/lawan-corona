import React, { Component } from 'react'

import Corona from 'assets/images/coronaCherry.png'

export default class Loading extends Component {
    render() {
        return (
            <div className="flex w-full h-screen justify-center items-center">
                <img src={Corona} alt="Corona" className="animate-slow-spin w-20 h-20"/>
            </div>
        )
    }
}
