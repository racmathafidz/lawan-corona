/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Gejala({ data }) {
  return (
    <Fade bottom>
      <section className="container mx-auto mt-20">
        <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-0">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center mb-1">
            Apa Saja Gejala Corona?
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-light text-justify sm:text-center xl:mx-36">
            Orang yang terpapar virus corona akan mengalami gejala ringan hingga parah.
            <br />
            Rata-rata gejala akan muncul 5–14 hari setelah seseorang pertama kali terinfeksi virus ini.
            <br />
            Gejala antara lain :
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-5 sm:mx-32 lg:mx-60 xl:mx-80 mt-10">
          <div>
            <h2 className="text-xl sm:text-2xl text-gray-800 font-medium">
              Gejala Ringan :
            </h2>

            {
                            data[0].ringan.map((item) => (
                              <ul className="text-gray-400 text-lg sm:text-xl font-light">
                                <li className="flex items-center mt-2 ml-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  {item.gejala}
                                </li>
                              </ul>
                            ))
                        }
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl text-gray-800 font-medium">
              Gejala Parah :
            </h2>

            {
                            data[1].parah.map((item) => (
                              <ul className="text-gray-400 text-lg sm:text-xl font-light">
                                <li className="flex items-center mt-2 ml-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  {item.gejala}
                                </li>
                              </ul>
                            ))
                        }
          </div>
        </div>
      </section>
    </Fade>
  );
}
