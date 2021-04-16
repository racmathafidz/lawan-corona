import React from 'react'
import Lottie from 'react-lottie'

import MemakaiMasker from 'assets/lotties/memakaiMasker.json'

export default function LottieMemakaiMasker() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: MemakaiMasker,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div className="p-3 sm:p-2 lg:p-3 border border-red-200 rounded-xl shadow-xl transform transition duration-500 hover:-translate-y-3">
            <Lottie 
                options={defaultOptions}
                height={225}
                width={225}
            />

            <h2 className="text-2xl text-gray-800 font-medium text-center mt-1">
                 Memakai Masker
            </h2>
            <p className="text-lg text-gray-400 text-center font-light mt-1 mb-4">
                Memakai masker kain menurunkan risiko penularan COVID-19 sebesar 45 persen dan masker bedah sebesar 70 persen.
            </p>
        </div>
    )
}
