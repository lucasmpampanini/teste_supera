import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import cartIcon from '../assets/images/cart-icon.svg'
import { useDispatch } from 'react-redux'
import { IdContext } from '../contextApi';


const StyledPaper = withStyles({
    root: {
        margin: 20,
        maxWidth: 300,
        background: '#FFFFFF',
        padding: 20,
        
    },

})(Paper);

const StyledPaperScore = withStyles({
    root: {
        width: 64,
        height: 36,
        background: 'green',
        color: 'white',
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

})(Paper);


export default function Card({ product }) {
    
    const dispatch = useDispatch()
    const {id, setId} = useContext(IdContext)

    function setCart(id) {
        localStorage.setItem(id, id)
        
        setId(Object.keys(localStorage))
    }

    return (
        <div>
            <StyledPaper elevation={6} >
                <Grid 
                    container
                    justifyContent='center'
                    alignItems='center'
                    direction='row'
                    >
                    <Grid item >
                        <img src={`/images/${product.image}`} width={200} />
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'> {product.name} </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction='row'
                    >
                        <Grid item xs={6}>
                            <Typography variant='h6'> {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="primary" onClick={() => {
                                
                                setCart(product.id)
                                
                                
                                }} ><img src={cartIcon} width={30} /> </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <StyledPaperScore><Typography variant='h5'>{product.score}</Typography></StyledPaperScore>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledPaper>

        </div>
    )
}
