import * as React from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"
import {
  withStyles,
  Typography,
  Theme,
  WithStyles,
  createStyles,
  Card,
  Button,
    CardContent,
    Grid,
} from "@material-ui/core"
import SafelloWidget from "./SafelloWidget"

interface Props extends WithStyles<typeof styles> {}

const BuyEth: React.SFC<Props> = ({ classes }) => (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
        <Grid className={classes.widget} item xs={12} md={6}>
            <SafelloWidget crypto="eth" country="no" lang="no" />
        </Grid>
        <Grid item className={classes.widget} xs={12} md={6}>
            <SafelloWidget crypto="btc" country="no" lang="no" />
        </Grid>
    </Grid>
)

// STYLE
const styles = ({  }: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            height: "100vh",
        },
    widget: {
        //margin: "auto",
        marginTop: 30,
        textAlign: "center"
    },
    cardContent: {
      textAlign: "center",
    },
    header: {
      margin: 10,
    },
    buttonBtc: {
      fontSize: 30,
      background: "#f7931a",
        margin: 10,
        marginTop: 30,
    },
    buttonEth: {
      fontSize: 30,
      backgroundColor: "#828384",
      margin: 10,
        marginTop: 30,
    },
  })

const componentWithStyles = withStyles(styles)(BuyEth)

// STATE
const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    createDao: () => {
      dispatch(push("/dao-creator"))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentWithStyles)
