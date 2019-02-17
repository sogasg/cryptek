import * as React from "react"
import { SFC } from "react"
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core"
import backgriundImg from "../img/norway1.jpg"

interface Props extends WithStyles<typeof styles> {}

const Layout: SFC<Props> = ({ classes, children }) => (
  <div className={classes.root}>
    <main className={classes.background}>
      <div className={classes.content}>{children}</div>
    </main>
  </div>
)

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {},
    background: {},
    content: {},
  })

export default withStyles(styles)(Layout)
