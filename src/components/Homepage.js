import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { PrimaryAppBar, TopNavBar } from '../layout';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import home from '../images/home.jpg';
import vintage from '../images/vintage.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 550,
    padding: theme.spacing(4),

  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <PrimaryAppBar className={classes.bar}>xs=12 </PrimaryAppBar>
        </Grid>
        <Grid item xs={12}>
        <TopNavBar className={classes.bar}>xs=12 </TopNavBar>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Home decor shopping"
          height="250"
          image={home}
          title="Home decor"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            Design Your Perfect Home
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shop home
        </Button>
        </CardActions>
    </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Vintage women clothing"
          height="250"
          image={vintage}
          title="Women clothing"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
           Shop For the Most Stylish Outfits
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shop women's clothing
        </Button>
        </CardActions>
    </Card>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2">
          Unique everything
          </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
We have millions of one-of-a-kind items, so you can find whatever you need 
(or really, really want).
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2">
          Independent sellers
          </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
        Buy directly from someone who put their heart and soul into making something special.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2">
          Secure shopping
          </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
        We use best-in-class technology to protect your transactions.
          </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
      </div>
  );
}
