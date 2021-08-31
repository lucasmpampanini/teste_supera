import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux'
import CardCarts from './cardCarts';
import TotalCarts from './totalCarts';


const StyleContainer = withStyles({
    root: {
        marginTop: 50,
        padding: '50px 20px 20px 20px',
        background: '#30303099',

    }
})(Container);


export default function CartListProducts() {

    const products = useSelector((state) => state.selectCart)

    return (
        <StyleContainer>
            <Grid container>
                <Grid 
                    container
                    justifyContent='center'
                    alignItems='center'
                    direction='row' 
                >

                    {products === false ? <></> 
                    : products.map(product => {
                        return (
                            <Grid 
                                
                                justifyContent='center'
                                alignItems='center'
                                xs={12}
                            >
                                
                                <CardCarts  product={product}/>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid 
                    item
                    xs={12}
                >
                  {products === false ? <></> 
                    :<TotalCarts />
                  }
                </Grid>

            </Grid>
        </StyleContainer>
    )
}
