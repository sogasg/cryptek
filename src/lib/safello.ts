export default (className: string) => {
  var _qbs = document.querySelectorAll("." + className)

  var qbs = [].slice.call(_qbs)

  if (!qbs.length) {
    throw "Couldn't find `.safello-quickbuy` element!"
  }

  function getWindowQueryParam(name: string) {
    var match = RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search)
    return match && decodeURIComponent(match[1].replace(/\+/g, " "))
  }

  qbs.forEach(function(qb: any) {
    var iframe = document.createElement("iframe")
    var appId = qb.getAttribute("data-app-id")
    var border = qb.getAttribute("data-border")
    var addressHelper = qb.getAttribute("data-address-helper")
    var hidePoweredBy = qb.getAttribute("data-hide-powered-by")
    var language = qb.getAttribute("data-lang")
    var country = qb.getAttribute("data-country")
    var address = qb.getAttribute("data-address")
    var layout = qb.getAttribute("data-layout")
    var crypto = qb.getAttribute("data-crypto")
    var cc = qb.getAttribute("data-cc")

    var ref = getWindowQueryParam("r")

    var url = "https://app.safello.com/sdk/quickbuy.html?appId=" + appId

    if (border) {
      url += "&border=" + border
    }

    if (addressHelper) {
      url += "&address-helper=" + addressHelper
    }

    if (hidePoweredBy) {
      url += "&hide-powered-by=" + hidePoweredBy
    }

    if (language) {
      url += "&lang=" + language
    }

    if (country) {
      url += "&country=" + country
    }

    if (address) {
      url += "&address=" + address
    }

    if (layout) {
      url += "&layout=" + layout
    }

    if (crypto) {
      url += "&crypto=" + crypto
    }

    if (ref) {
      url += "&ref=" + ref
    }

    if (cc) {
      url += "&cc=" + cc
    }

    iframe.setAttribute("src", url)
    iframe.setAttribute("width", "500px")
    iframe.setAttribute("height", "650px")
    iframe.setAttribute(
      "sandbox",
      "allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups"
    )
    iframe.style.border = "none"
    iframe.style.maxWidth = "100%"

    qb.appendChild(iframe)
  })
}
