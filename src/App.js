import React, { Component } from 'react';
// componentsStyle
import Footer from './components/footer/Footer'
import Parallax from './components/parallax/Parallax';
import Header from './components/header/Header';
import GridContainer from "./components/Grid/GridContainer";
import GridItem from "./components/Grid/GridItem";
import Button from "./components/customButtons/Button";
import SectionLogin from './components/sectionLogin/SectionLogin';
//####
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import styles from './components/styleComponent/componentStyle/ComponentStyle';
import './App.css';

const useStyles = makeStyles(styles);

export default function App(props) {
  const classes = useStyles();
  const { ...rest } = props;

    return (
      <div>
          <Header
            brand="< oguzKaraoglan.js />"
            color="white"
            fontSize="20px"
            rightLinks={
              <List className={classes.list}>

                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Contact
                  </Button>
                </ListItem>

                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    About
                  </Button>
                </ListItem>               

              </List>
            }
          />
          <Parallax >
        <div>
          <GridContainer>
            <GridItem>
            <div className={classes.listItem}>
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div></div>
              <div id="title">
                <span>OGUZ KARAOGLAN</span>
                <br></br>
                <span>I'M FRONTEND DEVELOPER</span>
            </div>
            </GridItem>
          </GridContainer>
          </div>
      </Parallax>

    

      
          <Footer />
      </div>
    );
   
    
  }