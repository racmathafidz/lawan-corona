import React from 'react'

import Fade from 'react-reveal/Fade';

import LottieMencuciTangan from 'parts/LottieMencuciTangan'
import LottieMenjagaJarak from 'parts/LottieMenjagaJarak'
import LottieMemakaiMasker from 'parts/LottieMemakaiMasker'

export default function Protokol({ data }) {
    return (
        <Fade bottom>
            <section className="container mx-auto">
                <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-0">
                    <h1 className="text-4.5xl sm:text-5xl font-medium text-gray-800 text-center mb-1">
                        Bagaimana Cara Mencegah Corona?
                    </h1>
                    <p className="text-xl text-gray-400 font-light text-justify sm:text-center xl:mx-36">
                        Terapkan protokol 3M sebagai upaya mencegah sekaligus memutus rantai penularan COVID-19.<br/>
                        Apa itu 3M? 
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-2 lg:gap-9 mx-6 sm:mx-2 lg:mx-4 xl:mx-40 mt-12">
                    <Fade bottom delay={100}>
                        <LottieMencuciTangan/>
                    </Fade>
                    <Fade bottom delay={300}>
                        <LottieMenjagaJarak/>
                    </Fade>
                    <Fade bottom delay={500}>
                        <LottieMemakaiMasker/>
                    </Fade>                    
                </div>
            </section>
        </Fade>
    )
}
