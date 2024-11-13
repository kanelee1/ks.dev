import React from 'react'
import styles from './PageHeader.module.css'
import { Flex, TabNav, DropdownMenu, Button, ChevronDownIcon, ThickDividerHorizontalIcon } from "@radix-ui/themes";
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Image from 'next/image';


export default function PageHeader() {
  return (
    <Flex className={styles.container}>
      <Flex className={styles.headerLogo}>
        <a href="" className={styles.headerLogoText}>ks.dev</a>
      </Flex>
      <Flex className={styles.headerNav}>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant='outline' color='gray'>
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>About</DropdownMenu.Item>
            <DropdownMenu.Item>Projects</DropdownMenu.Item>
            <DropdownMenu.Item>Contact</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Flex>
  )
}