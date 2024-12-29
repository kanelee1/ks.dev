"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './PageHeader.module.css'
import { Flex, TabNav } from "@radix-ui/themes";
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function PageHeader() {
  const [activeTab, setActiveTab] = useState("about");
  const [hidden, setHidden] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <Flex className={styles.container}>

      <Flex className={styles.headerLogo}>
        <Link href="#" onClick={scrollToTop} className={styles.headerLogoText}>ks.dev</Link>
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

      <ThemeToggle />
      
    </Flex>
  )
}