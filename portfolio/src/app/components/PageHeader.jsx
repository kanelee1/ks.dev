"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './PageHeader.module.css'
import { Flex, TabNav, Switch } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';


export default function PageHeader() {
  const [activeTab, setActiveTab] = useState("about");
  const [lightSwitch, setLightSwitch] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // toggle state of lightSwitch
  const handleLightSwitch = () => {
    setLightSwitch(prevState => !prevState); 
  };

  // log whenever lightSwitch is turned on or off
  useEffect(() => {
    console.log("Light is", lightSwitch ? 'On' : 'Off');
  }, [lightSwitch]);  

  return (
    <Flex className={styles.container}>

      <Flex className={styles.headerLogo}>
        <Link href="#about" className={styles.headerLogoText}>ks.dev</Link>
      </Flex>

      <Flex className={styles.tabNav}>
        <TabNav.Root>
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