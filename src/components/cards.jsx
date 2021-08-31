import { Grid } from '@material-ui/core';
import React from 'react'
import Card from './card';
import { useSelector } from 'react-redux'




export default function Cards(props) {

    const products = useSelector((state) => state.products)


    return (<>
        {products.map(product => {
        return (
            <Grid 
                item
                container
                justifyContent='center'
                alignItems='center'
                sm={4}
            >
                <Card  product={product}/>
            </Grid>
        );
    })}
    
    </>)
}
