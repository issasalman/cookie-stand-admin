import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import Link from 'next/link'

export default function Overview() {
     let flags=true;
    return (
        <>
            <Header flags={flags} />
            <main className='flex flex-col items-center mt-8'>
                
            </main>
            <Footer flags={flags} />

        </>
    )
}