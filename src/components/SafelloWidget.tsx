import * as React from "react"
import Safello from "../lib/safello"

export type Props = {
  crypto: "eth" | "btc"
  country: "no" | "se" | "dk"
  lang: "no" | "se" | "dk"
}

type State = {
  className: string
}

class SafelloWidget extends React.Component<Props, State> {
  

  constructor(props: Props) {
    super(props)
    this.state = {
      className: makeRandomId()
    }
  }

  componentDidMount() {
    Safello(this.state.className)
  }

  render() {
    return (
      <>
        <div
          className={this.state.className}
          data-app-id="019d4940-0342-4445-8990-665d4411dabe"
          data-border="true"
          data-address-helper="true"
          data-crypto={this.props.crypto}
          data-country={this.props.country}
          data-lang={this.props.lang}
        />
        <script src="https://app.safello.com/sdk.js" />
      </>
    )
  }
}

export default SafelloWidget

function makeRandomId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text.toString();
}
