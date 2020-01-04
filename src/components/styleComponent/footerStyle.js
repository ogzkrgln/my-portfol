import { container, primaryColor, successColor } from "./styles/Style";

const footerStyle = {
  margin:"0",
  marginBottom:"0px",
  padding:"0",
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    backgroundColor:"white",
    padding: "2.9375rem 0rem",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    bottom:"0"
  },
  a: {
    color: successColor,
    textDecoration: "none",
    backgroundColor: "white"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
