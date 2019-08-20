import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" href='/jewelry-and-accessories'>Jewelry & Accessories</Button>
          <Button color="inherit" href='/clothing-and-shoes'>Clothing & Shoes</Button>
          <Button color="inherit">Home & Living</Button>
          <Button color="inherit">Toys & Entertainment</Button>
          <Button color="inherit">Art & Collectibles</Button>
          <Button color="inherit">Craft Supplies & Tools</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

