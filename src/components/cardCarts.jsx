import React, { useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { IdContext } from '../contextApi';
import { selectCart } from '../redux/actions/SelectCart'

const StyledPaper = withStyles({
    root: {
        margin: 20,
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


export default function CardCarts({ product }) {
    
    const dispatch = useDispatch()
    const {id, setId} = useContext(IdContext)

    function setCart(id) {
        localStorage.removeItem(id)
        
        setId(Object.keys(localStorage))

        dispatch(selectCart(Object.keys(localStorage)))
    }

    return (
            <StyledPaper elevation={6}  >
                <Grid 
                    container
                    justifyContent='flex-start'
                    alignItems='flex-end'
                    direction='row'
                    
                    >
                        <Grid item xs={2}>
                            <img src={`/images/${product.image}`} width={80} />
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant='h6'> {product.name} </Typography>
                        </Grid>
                        
                        <Grid item xs={2}>
                            <Typography variant='h6'> {product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" onClick={() => {
                                
                                setCart(product.id)
                                
                                
                                }} > Remover Item </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledPaperScore><Typography variant='h5'>{product.score}</Typography></StyledPaperScore>
                        </Grid> 
                        
                </Grid>
            </StyledPaper>

    )
}
