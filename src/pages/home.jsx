import React from 'react'
import Hero from '../components/hero';
import Products from '../components/products';

export default function Home() {
    return (
        <div>
            <section>
                <Hero />
            </section>
            <section>
                <Products />
            </section>
            
        </div>
    )
}
