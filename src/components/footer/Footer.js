import React from 'react'
import classNames from 'classnames';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Favorite from "@material-ui/icons/Favorite";
import styles from './../styleComponent/footerStyle';
import footerStyle from './../styleComponent/footerStyle';


const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
      [classes.footer]: true,
      [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
      [classes.a]: true,
      [classes.footerWhiteFont]: whiteFont
    });
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          &copy; {1900 + new Date().getYear()} , Tüm hakları saklıdır. {" "}
            <Favorite className={classes.icon} /> by{" <oguzKaraoglan/> "}
        </div>
      </footer>
    );
  }