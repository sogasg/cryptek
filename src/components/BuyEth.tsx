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
import SafelloWidget from "./SafelloWidget";

interface Props extends WithStyles<typeof styles> {
}

const BuyEth: React.SFC<Props> = ({ classes }) => (
  <>
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h1" className={classes.header}>
            Kjøp Ethereum
        </Typography>
        <Typography variant="body1">
            Her kan du kjøpe Ethereum ved hjelp av Visa/MasterCard og BankID
        </Typography>
        <SafelloWidget crypto="eth" country="no" lang="no" ></SafelloWidget>
      </CardContent>
    </Card>
  </>
)

// STYLE
const styles = ({  }: Theme) =>
  createStyles({
    card: {
      maxWidth: 900,
      margin: "auto",
      marginTop: 30,
    },
    cardContent: {
      textAlign: "center",
    },
    header: {
      margin: 10,
    },
    button: {
      margin: 10,
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
