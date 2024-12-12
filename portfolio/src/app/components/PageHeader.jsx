"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import styles from './PageHeader.module.css'
import { Flex, TabNav, Switch } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';


export default function PageHeader() {
  const [activeTab, setActiveTab] = useState("about");
  const [lightSwitch, setLightSwitch] = useState(false);
  const [hidden, setHidden] = useState(false);
  const {resolvedTheme, setTheme} = useTheme();

  const handleToggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // set tabNav to hidden if window less than 600px
    const handleResize = () => {
      setHidden(window.innerWidth < 600);
    }

    // listen for screen resize
    window.addEventListener('resize', handleResize);

    // remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // toggle state of lightSwitch
  const handleLightSwitch = () => {
    setLightSwitch(prevState => !prevState); 
    handleToggleTheme();
  };

  return (
    <Flex className={styles.container}>

      <Flex className={styles.headerLogo}>
        <Link href="#about" className={styles.headerLogoText}>ks.dev</Link>
      </Flex>

      <Flex className={styles.tabNavContainer}>
        <TabNav.Root hidden={hidden} size="2">
          <TabNav.Link asChild active={activeTab === "about"}>
            <Link href="#about" onClick={() => handleTabClick("about")}>About</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={activeTab === "projects"}>
            <Link href="#projects" onClick={() => handleTabClick("projects")}>Projects</Link>
          </TabNav.Link>
          <TabNav.Link asChild active={activeTab === "contact"}>
            <Link href="#contact" onClick={() => handleTabClick("contact")}>Contact</Link>
          </TabNav.Link>
        </TabNav.Root>
      </Flex>

      <Flex className={styles.lightSwitch} gap="2">
        {/* TODO: add onClick() to change to dark mode */}
        <Switch color='blue' defaultChecked={false}  onClick={() => handleLightSwitch()} />
        {lightSwitch ? <SunIcon /> : <MoonIcon />}
      </Flex>

    </Flex>
  )
}