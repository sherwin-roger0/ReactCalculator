import {useState} from "react"
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {AppBar,Toolbar} from '@material-ui/core/';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root1: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root: {
    flexGrow: 1,
  },
  root2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Calc(){
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  var [val,setVal]=useState("");
  var [an,setAn]=useState("");

  function input(event){
    event.preventDefault();
    var num = (event.target.value);
    val+=num
    console.log(val)
    setVal(val)
  }

  function equal(){
    try{
      console.log(eval(val))
      const ans=eval(val)
      setAn(ans);
    }
    catch(err) {
      setAn(err.message+" "+"Dont use zero at the Starting of any number")
      setVal("")
    }
  }

  function clear(){
    setVal("")
  }

  function answer(){
    const styles = (theme) => ({
      root: {
        margin: 0,
        padding: theme.spacing(2),
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
    });

    const DialogTitle = withStyles(styles)((props) => {
      const { children, classes, onClose, ...other } = props;
      return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      );
    });

    const DialogContent = withStyles((theme) => ({
      root: {
        padding: theme.spacing(2),
      },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
      root: {
        margin: 0,
        padding: theme.spacing(1),
      },
    }))(MuiDialogActions)

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <Dialog aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle >
            Answer
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              {an}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Calculate Again
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }

  function But(props){
    return(
      <Button variant="outlined" color="secondary"><button onClick={input} value={props.val}>{props.val}</button></Button>
    )
  }

  return(
    <div classvalue={classes.root}>
      <AppBar>
          <Toolbar>
            <Typography variant="h6"> Sherwin's Calculator</Typography>
          </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Grid container direction="column" justify="center" alignItems="center" >
            <br />
              <TextField label="calculate" value={val} variant="outlined" hintText="Name" floatingLabelText="Name" fullWidth={true} />
              <br />
              <div>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                  <But val="1" />
                  <But val="2" />
                  <But val="3" />
                </ButtonGroup>
                <br/>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                  <But val="4" />
                  <But val="5" />
                  <But val="6" />
                </ButtonGroup>
                <br/>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                  <But val="7" />
                  <But val="8" />
                  <But val="9" />
                </ButtonGroup>
                <br/>
                  <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                    <But val="" />
                    <But val="0" />
                    <But val="" />
                  </ButtonGroup>
                  <br/>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                  <But val="+" />
                  <But val="-" />
                  <But val="*" />
                </ButtonGroup>
                <br/>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary Button group">
                  <Button><button onClick={input} value={"/"}>/</button></Button>
                  <Button onClick={() => { equal(); answer(); setOpen(true)}} value={"="}>=</Button>
                  <Button onClick={clear} value={"clear"}>clear</Button>
                </ButtonGroup>
                <br/>
                <br/>
                <br/>
              </div>
              <div>{answer()}</div>
          </Grid>
        </Container>
      </React.Fragment>
    </div>
  )

}

export default Calc;
