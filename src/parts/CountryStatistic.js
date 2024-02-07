/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import Fade from "react-reveal/Fade";

import Button from "elements/Button";
// import formatNumber from "utils/formatNumber";
// import formatDate from "utils/formatDate";

export default function CountryStatistic(props) {
  const { /* data, date, */ withButton } = props;

  if (withButton) {
    return (
      <Fade bottom>
        <section>
          <div className="border rounded-lg shadow-xl py-9 mx-4 xl:mx-40">
            <div className="flex flex-col lg:flex-row justify-center px-2 sm:px-3 lg:px-1">
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
                Statistik Kasus&nbsp;
              </h1>
              <h1 className="text-4xl sm:text-5xl font-medium text-red-600 text-center">
                Corona&nbsp;
              </h1>
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
                Indonesia
              </h1>
            </div>
            <p className="text-gray-400 text-center text-lg sm:text-xl font-light mb-1 px-2 sm:px-3 lg:px-1">
              Berikut detail statistik kasus corona di Indonesia per 4 Februari
              2024
              {/* {' '}
              {formatDate(date.lastUpdate)}
              {' '} */}
              :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 lg:mx-52">
              <div className="text-center">
                <h2 className="text-3.5xl sm:text-4.5xl text-red-600 font-medium">
                  {/* {formatNumber(data.confirmed)} */}
                  2.243
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-light">
                  Total Positif
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-3.5xl sm:text-4.5xl text-yellow-500 font-medium">
                  {/* {formatNumber(data.active)} */}
                  2.243
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-light">
                  Dirawat
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-3.5xl sm:text-4.5xl text-gray-700 font-medium">
                  {/* {formatNumber(data.deaths)} */}1
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-light">
                  Meninggal Hari Ini
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-3.5xl sm:text-4.5xl text-green-600 font-medium">
                  {/* {formatNumber(data.recovered)} */}
                  114
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-light">
                  Sembuh Hari Ini
                </p>
              </div>
            </div>

            <Button
              type="link"
              href="/statistik"
              className="flex w-48 h-12 mt-5 mb-3 mx-auto items-center text-lg text-white bg-red-500 border-2 border-red-400 rounded-full justify-center transition duration-500 hover:bg-red-600"
            >
              Statistik Daerah
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <svg
                className="w-4 h-4 -ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </section>
      </Fade>
    );
  }

  return (
    <Fade bottom>
      <section>
        <div className="border rounded-lg shadow-xl py-9 mt-5 mx-4 xl:mx-40">
          <div className="flex flex-col lg:flex-row justify-center  px-2 sm:px-3 lg:px-1">
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
              Statistik Kasus&nbsp;
            </h1>
            <h1 className="text-4xl sm:text-5xl font-medium text-red-600 text-center">
              Corona&nbsp;
            </h1>
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center">
              Indonesia
            </h1>
          </div>
          <p className="text-gray-400 text-center text-lg sm:text-xl font-light mb-1 px-2 sm:px-3 lg:px-1">
            Berikut detail statistik kasus corona di Indonesia per 4 Februari
            2024
            {/* {' '}
              {formatDate(date.lastUpdate)}
              {' '} */}{" "}
            :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 py-10 lg:mx-52">
            <div className="text-center">
              <h2 className="text-3.5xl sm:text-4.5xl text-red-600 font-medium">
                {/* {formatNumber(data.confirmed)} */}
                2.243
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-light">
                Total Positif
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3.5xl sm:text-4.5xl text-yellow-500 font-medium">
                {/* {formatNumber(data.active)} */}
                2.243
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-light">
                Dirawat
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3.5xl sm:text-4.5xl text-gray-700 font-medium">
                {/* {formatNumber(data.deaths)} */}1
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-light">
                Meninggal
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3.5xl sm:text-4.5xl text-green-600 font-medium">
                {/* {formatNumber(data.recovered)} */}114
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-light">
                Sembuh
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
