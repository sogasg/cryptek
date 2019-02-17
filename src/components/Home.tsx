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

const BuyEth: React.SFC<Props> = ({ classes }) => (
  <>
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h2" className={classes.header}>
          Kjøpe Bitcoin eller Ethereum
        </Typography>
        <Typography variant="h6">
          Her kan du kjøpe Bitcoin og Ethereum ved hjelp av Visa/MasterCard og
          BankID
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonBtc}
         href="#/bitcoin" 
        >
          Bitcoin
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonEth}
            href="#/ethereum" 
        >
          Ethereum
        </Button>
        <Typography variant="body1">
            Denne tjenesten er under utvikling av Cluda AS. Dette er en foreløbig versjon som vil gi tilgang til kjøp og salg av Ethereum i utviklingsperioden.
        </Typography>
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
