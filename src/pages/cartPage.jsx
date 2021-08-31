import React from 'react'
import CartListProducts from '../components/CartListProducts';
import Hero from '../components/hero';


export default function CartPage() {
    return (
        <div>
            <section>
                <Hero />
            </section>
            <section>
                <CartListProducts />
            </section>
            
        </div>
    )
}
