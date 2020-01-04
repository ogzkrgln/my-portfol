import React from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from './../styleComponent/parallaxStyle';



const useStyles = makeStyles(styles);
export default function Parallax(props) {
    let windowScrollTop;
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 10;
    } else {
      windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
      "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", resetTransform);
      }
      return function cleanup() {
        if (window.innerWidth >= 768) {
          window.removeEventListener("scroll", resetTransform);
        }
      };
    });
    const resetTransform = () => {
      var windowScrollTop = window.pageYOffset / 10;
      setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter, className, children, style, image, small } = props;
    const classes = useStyles();
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundColor : "transparent",
          transform: transform
        }}
      >
        {children}
      </div>
    );
  }