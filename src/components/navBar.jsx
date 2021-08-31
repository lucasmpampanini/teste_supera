import React from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import cartShoppingIcon from '../assets/images/mbri-shopping-cart.svg'
import {selectCart} from '../redux/actions/SelectCart'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


const StyledPaper = withStyles({
    root: {
        borderRadius: 0,
        background: '#30303099',
        color: '#fff',
        padding: 20,        
    },

})(Paper);


export default function NavBar() {

    const dispatch = useDispatch()

    return (
        <div>
            <StyledPaper elevation={6} >
                <Grid container>
                    <Grid 
                        container
                        direction='row'
                        justifyContent='flex-start'
                        alignItems='center'
                        xs={10}
                    > 
                        <Link to="/">
                            <Grid item>
                                <img src="/favicon.ico" alt="" width={60} />
                            </Grid>
                        </Link>
                            <Grid item>
                                <Typography variant="h3"> GameStore</Typography>

                            </Grid>
                    </Grid>
                    <Grid 
                        container
                        justifyContent='flex-end'
                        alignItems='center'
                        xs={2}
                    >
                        <Grid item>
                            <Link to="/cart">
                                <Button 
                                    variant="contained" 
                                    color="primary"  
                                    onClick={()=> {dispatch(selectCart(Object.keys(localStorage)));
                                    }}
                                >
                                        <img style={{fill: 'white'}} src={cartShoppingIcon} width={30}/> 
                                </Button>

                            </Link>
                            

                        </Grid>

                    </Grid>

                </Grid>
            </StyledPaper>

        </div>
    )
}
