"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PageHeader.module.css'
import { Flex, TabNav, Switch, Text } from "@radix-ui/themes";
import Image from 'next/image';
import Link from 'next/link';



export default function PageHeader() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <Flex className={styles.container}>

      <Flex className={styles.headerLogo}>
        <Link href="#home" className={styles.headerLogoText}>ks.dev</Link>
      </Flex>

      <Flex className={styles.tabNav}>
        <TabNav.Root>
          <TabNav.Link asChild active={activeTab === "home"}>
            <Link href="#home" onClick={() => handleTabClick("home")}>Home</Link>
          </TabNav.Link>
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
        <Switch color='orange'/>
        <Text weight="thin" size="2">Light</Text>
      </Flex>

    </Flex>
  )
}