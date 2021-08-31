import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { IdContext } from '../contextApi';
import { selectCart } from '../redux/actions/SelectCart'


const StyledPaper = withStyles({
    root: {
        margin: 20,
        background: '#FFFFFF',
        padding: 20,
        
    },

})(Paper);


export default function TotalCarts() {

    const products = useSelector((state) => state.selectCart)
    
    let subTotal = 0

    products.map(pro => {
        subTotal += pro.price
    })
    
    console.log(subTotal);
    let frete = subTotal >= 250 ? 0 : products.length * 10.00

    let total = frete + subTotal

    return (
        <StyledPaper elevation={6}  >
                <Grid 
                    container
                    justifyContent='flex-end'
                    alignItems='flex-end'
                    direction='row'
                    
                >
                        
                        
                        <Grid item xs={2}>
                            <Typography variant='h6'>subtotal {subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6'>{
                            frete === 0 ? "Frete Grátis" :
                            "Frete " + frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6'>Total {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Typography>
                        </Grid>
                        
                        
                </Grid>
        </StyledPaper>
    )
}


// product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})