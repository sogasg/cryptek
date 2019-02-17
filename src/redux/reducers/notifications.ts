const initialState = {
  message: "",
  type: "info",
  open: false,
}

export const reducer = (state = initialState, event: any) => {
  switch (event.type) {
    case "NOTIFICATION_INFO":
      return { message: event.payload, type: "info", open: true }
    case "NOTIFICATION_ERROR":
      return { message: event.payload, type: "error", open: true }
    case "NOTIFICATION_CLOSE":
      return { message: "", type: "info", open: false }
    default:
      return state
  }
}
