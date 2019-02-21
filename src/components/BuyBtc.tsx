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
} from "@material-ui/core"
import SafelloWidget from "./SafelloWidget"

interface Props extends WithStyles<typeof styles> {}

const BuyBtc: React.SFC<Props> = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h1" className={classes.header}>
      Kjøp Bitcoin
    </Typography>
    <Typography className={classes.bodyText} variant="body1">
      Her kan du kjøpe Bitcoin ved hjelp av Visa/MasterCard og BankID
    </Typography>
    <SafelloWidget crypto="btc" country="no" lang="no" />
  </div>
)

// STYLE
const styles = ({  }: Theme) =>
  createStyles({
    root: {
      margin: "auto",
        marginTop: 30,
        textAlign: "center"
    },
    bodyText: {
        fontSize: 18,
        marginTop: 25,
        marginBottom: 10,
    },
    header: {
      margin: 10,
    },
    button: {
      margin: 10,
    },
  })

const componentWithStyles = withStyles(styles)(BuyBtc)

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
