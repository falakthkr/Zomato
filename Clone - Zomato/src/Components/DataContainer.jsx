import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CallIcon from '@material-ui/icons/Call';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
  });

const DataContainer = (props) => {
    console.log(props)
    const {cuisines,name,location,average_cost_for_two,timings,phone_numbers,featured_image} = props.item
    const{address} = location
    const classes = useStyles();
    
    return (
      <div align="center">
          <Card className={classes.root}  style={{width:"900px"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={featured_image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {address}
                    </Typography>
                    <hr />
                    <Typography variant="body2" component="p">
                        <li>Cuisines : {cuisines}</li>
                        <li>Cost for two : {average_cost_for_two}</li>
                        <li>Hours : {timings}</li>
                        <li>Phone : {phone_numbers}</li>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" variant="contained" startIcon={<CallIcon />}>
                    Call
                </Button>
                <Button style={{"marginLeft":"22px","marginRight":"22px"}} size="small" color="secondary" variant="contained" startIcon={<MenuIcon />}>
                    View Menu
                </Button>
                <Button size="small" color="secondary" variant="contained" startIcon={<ShoppingCartIcon />}>
                    Order Now
                </Button>
            </CardActions>
        </Card>
        <br />
      </div>
    );
}

export default DataContainer