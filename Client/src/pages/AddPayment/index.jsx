import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  icon: {
    fontSize: 100,
    color: theme.palette.success.main,
  },
  button: {
    marginTop: theme.spacing(3),
  },
}));

function PaymentSuccessPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <CheckCircleIcon className={classes.icon} />
      <Typography variant="h4" align="center">
        Payment successful!
      </Typography>
      <Typography variant="body1" align="center">
        Your payment of $50 has been received.
      </Typography>
      <Typography variant="body2" align="center">
        Reference ID: 123456789
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          // Handle button click, such as redirecting to homepage
        }}
      >
        Back to homepage
      </Button>
    </Grid>
  );
}

export default PaymentSuccessPage;