import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Cards from './cards';
import Filter from './Filter';


const StyleContainer = withStyles({
    root: {
        marginTop: 50,
        padding: '50px 20px 20px 20px',
        background: '#30303099',

    }
})(Container);



export default function Products() {

    

    return (
        <StyleContainer>
            <Grid container>
                <Grid 
                    item
                    xs={12}
                >
                    
                  <Filter />  

                </Grid>
                <Grid 
                    container
                    justifyContent='center'
                    alignItems='center'
                    direction='row' 
                >
                    <Cards />

                </Grid>

            </Grid>
        </StyleContainer>
    )
}
