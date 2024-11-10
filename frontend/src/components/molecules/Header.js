import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import {useGSAP} from "@gsap/react";
import NavigationMenu from "../components/NavBar.js";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import HomeRounded from "@mui/icons-material/HomeRounded";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItem from "@mui/joy/ListItem";
import Head from "./Head.js";

gsap.registerPlugin(Observer);

function Header() {
    const headerRef = useRef(null);

    useGSAP(() => {
        Observer.create({
            target: window,
            type: 'wheel,touch,scroll',
            onUp: () => gsap.to(headerRef.current, { y: 0, duration: 0.3 }), // Réapparait quand on scroll vers le haut
            onDown: () => gsap.to(headerRef.current, { y: -100, duration: 0.3 }), // Disparaît quand on scroll vers le bas
        });
    }, []);

    return (
        <div>
            <header>
                <Box ref={headerRef} className="main-tool-bar">
                    <div>
                        <List className="nav-list"
                              role="menubar"
                              orientation="horizontal">
                            <ListItem>
                                <a href="#navigation-menu">
                                    <ListItemButton
                                        className="nav-item-button"
                                    >
                                        <ListItemDecorator className="nav-item-icon">
                                            <HomeRounded/>
                                        </ListItemDecorator>
                                        Home
                                    </ListItemButton>
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href="#navigation-menu">
                                    <ListItemButton
                                        className="nav-item-button"
                                    >
                                        Photography
                                    </ListItemButton>
                                </a>
                            </ListItem>
                            <ListItem>
                                <a href="#navigation-menu">
                                    <ListItemButton
                                        className="nav-item-button"
                                    >
                                        About
                                    </ListItemButton>
                                </a>
                            </ListItem>
                        </List>
                    </div>
                </Box>
            </header>
        </div>
        // <header ref={headerRef}>
        //     <Box  className="main-tool-bar">
        //         <div>
        //             <List className="nav-list"
        //                   role="menubar"
        //                   orientation="horizontal">
        //                 <ListItem>
        //                     <ListItemButton
        //                         className="nav-item-button"
        //                         href="#navigation-menu"
        //                     >
        //                         <ListItemDecorator className="nav-item-icon">
        //                             <HomeRounded />
        //                         </ListItemDecorator>
        //                         Home
        //                     </ListItemButton>
        //                 </ListItem>
        //                 <ListItem>
        //                     <ListItemButton
        //                         className="nav-item-button"
        //                         href="#navigation-menu"
        //                     >
        //                         Photography
        //                     </ListItemButton>
        //                 </ListItem>
        //                 <ListItem>
        //                     <ListItemButton
        //                         className="nav-item-button"
        //                         href="#navigation-menu"
        //                     >
        //                         About
        //                     </ListItemButton>
        //                 </ListItem>
        //             </List>
        //         </div>
        //     </Box>
        // </header>
    );
}

export default Header;
