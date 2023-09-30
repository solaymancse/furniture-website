import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { OurProducts } from "../components/OurProducts"
import { Copyright } from "../components/Copyright"
import { PageBanner } from "../components/PageBanner"
import { Recomendation } from "../components/Recomendation"


export const Shop = () => {
    return (
        <>
            <Navbar />
            <PageBanner title="Shop"/>

            <div className="bg-F9F1E7">
                <div className="container flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex gap-6 py-6 cursor-pointer px-2 items-center">
                        <div className="flex gap-4 text-xs lg:text-sm font-semibold items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            Filter

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                        </svg>
                        <div className="lg:ml-2 pl-2 lg:pl-6 border-l-2">
                            <h1 className="text-xs lg:text-sm">Showing 1-16 of 32 results</h1>
                        </div>
                    </div>

                    <div className="flex gap-8 items-center px-2">
                        <h1 className="text-xs lg:text-sm">Show</h1>
                        <span className=" text-xs lg:text-sm bg-white p-2">16</span>
                        <h1 className="text-xs lg:text-sm">Short by</h1>
                        <span className=" text-xs lg:text-sm bg-white py-2 px-6">Default</span>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <OurProducts show="1"/>
                <div className="container flex gap-6 justify-center my-12">
                    <h1 className="bg-B88E2F py-2 px-4 rounded-md text-white text-sm">1</h1>
                    <h1 className="bg-F9F1E7 py-2 px-4 rounded-md text-black text-sm">2</h1>
                    <h1 className="bg-F9F1E7 py-2 px-4 rounded-md text-black text-sm">3</h1>
                    <h1 className="bg-F9F1E7 py-2 px-4 rounded-md text-black text-sm">Next</h1>
                </div>
            </div>
            <Recomendation/>
            <Footer />
            <Copyright/>

        </>
    )
}
