import React, {useContext} from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import products from '../data/products.json';
import { Button } from '@material-ui/core';
import { useDispatch,  useSelector} from 'react-redux'
import {priceFilter, nameFilter, scoreFilter} from '../redux/actions/Products'
import { IdContext } from '../contextApi';

const StyledPaper = withStyles({
    root: {
        background: '#303030',
        padding: 20,
        
    },

})(Paper);


export default function Filter(props) {

    const dispatch = useDispatch()
    const {id, setId} = useContext(IdContext)

    return (
        <StyledPaper elevation={6} >
            <Button 
                variant="contained" 
                color="primary" 
                onClick={()=> {dispatch(priceFilter(products))}}
                > Preço: menor - maior </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={()=> {dispatch(nameFilter(products))}} 
                > alfabética </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={()=> {dispatch(scoreFilter(products))}}
                > popularidade </Button>
        </StyledPaper>
    )
}
