import React from 'react'

import Fade from 'react-reveal/Fade';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'assets/css/fancy-example.css';

export default function Faq({ data }) {
    return (
        <Fade bottom>
            <section className="mt-6">
                <div className="mx-5 sm:mx-10 lg:mx-20 xl:mx-0">
                    <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 text-center mb-1">
                        Pertanyaan Yang Sering Ditanyakan (F.A.Q)
                    </h1>
                    <p className="text-xl text-gray-400 font-light text-justify sm:text-center xl:mx-36">
                        Berikut beberapa pertanyaan yang sering ditanyakan tentang virus corona :
                    </p>
                </div>

                <div className="mt-12 mx-4 xl:mx-40">
                    <Accordion allowZeroExpanded>
                        {
                            data.map( (item, index) => {
                                return (
                                    <AccordionItem key={index}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                {item.pertanyaan}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        {item.jawaban}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </section>
        </Fade>
    )
}
