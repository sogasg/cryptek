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
import SafelloWidget from "../SafelloWidget"

interface Props extends WithStyles<typeof styles> {}

const BuyEth: React.SFC<Props> = ({ classes }) => (
  <div>
    <div className={classes.topSection}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        className={classes.topSectionInner}
      >
        <Grid className={classes.topText} item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.topHeadline}>
            Køb cryptocurrency hurtig, sikker og nem
          </Typography>

          <Typography variant="h5" gutterBottom className={classes.topHeadline}>
            Køb Bitcoin og Ethereum ved hjælp af Visa, MasterCard og NemID.
          </Typography>
        </Grid>
        <Grid className={classes.widget} item xs={12} md={6}>
          <SafelloWidget crypto="eth" country="dk" lang="da" />
        </Grid>
        <Grid item className={classes.widget} xs={12} md={6}>
          <SafelloWidget crypto="btc" country="dk" lang="da" />
        </Grid>
      </Grid>{" "}
    </div>

    <Grid
      container
      className={classes.walletSection}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid className={classes.walletSectionInner} item xs={12}>
        <Typography variant="h5" className={classes.recomendLedger}>
          Vi anbefaler{" "}
          <a
            href="https://www.ledger.com/products/ledger-nano-x?r=3ead"
            target="_blank"
          >
            Ledger Nano hardware tegnebog
          </a>{" "}
          til sikker opbevaring af kryptovaluta. Denne tegnebog kan gemme både
          Bitcoin og Ethereum.
        </Typography>

        <Typography variant="h5" className={classes.alternativeHeading}>
          Bitcoin tegnebog alternativ
        </Typography>
        <Typography className={classes.alternativeBody}>
          <a href="https://bitcoin.org/en/choose-your-wallet" target="_blank">
            Her
          </a>{" "}
          finder du et godt overblik over Bitcoin tegnebøger
        </Typography>
        <Typography variant="h5" className={classes.alternativeHeading}>
          Ethereum tegnebog alternativ
        </Typography>
        <Typography className={classes.alternativeBody}>
          <a href="https://metamask.io/" target="_blank">
            MetaMask
          </a>{" "}
          er et godt alternativ, der giver dig nem adgang til dit Ethereum.
          MetaMask gør det også nemt at overføre Ethereum og bruge dApps direkte
          i din browser.
        </Typography>
      </Grid>
    </Grid>

    <Grid
      container
      className={classes.footer}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Grid className={classes.footerInner} item xs={12}>
        <Typography variant="body1" className={classes.footerText}>
          Lavet af{" "}
          <a className={classes.footerLenk} href="http://cluda.com/">
            {" "}
            Cluda AS
          </a>{" "}
          - DK
        </Typography>
      </Grid>
    </Grid>
  </div>
)

// STYLE
const styles = ({  }: Theme) =>
  createStyles({
    topHeadline: {
      color: "white",
      fontWeight: "normal",
    },
    topSection: {
      flexGrow: 1,
      backgroundColor: "#5b6ab4",
    },
    topSectionInner: {
      margin: "auto",
      maxWidth: 1350,
    },
    topText: {
      textAlign: "center",
      padding: 30,
      color: "white",
    },
    recomendLedger: {
      marginTop: 50,
      marginBottom: 100,
    },
    alternativeHeading: {},
    alternativeBody: {
      marginTop: 10,
      marginBottom: 30,
      fontSize: 16,
    },
    widget: {
      //margin: "auto",
      marginTop: 10,
      textAlign: "center",
    },
    walletSection: {
      paddingTop: 50,
      paddingBottom: 70,
      backgroundColor: "#EEF0FB",
    },
    walletSectionInner: {
      maxWidth: 800,
      textAlign: "center",
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
    footer: {
      backgroundColor: "#424242",
      color: "white",
    },
    footerInner: {
      maxWidth: 1350,
      textAlign: "center",
    },
    footerText: {
      color: "white",
      marginTop: 80,
      marginBottom: 20,
    },
    footerLenk: {
      color: "white",
    },
  })

const componentWithStyles = withStyles(styles)(BuyEth)

// STATE
const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentWithStyles)
