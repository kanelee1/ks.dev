import React from 'react'
import styles from './PageFooter.module.css'
import { Flex, Text } from '@radix-ui/themes'
import { LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Flex width="100%" justify="between" className={styles.content}>
            <Flex>
                <Text size="1">© Kane Svelan 2025</Text>
            </Flex>
            <Flex gapX="2">
                <a href='#'><LinkedInLogoIcon /></a>
                <a href='#'><GitHubLogoIcon /></a>
                <a href='#'><DiscordLogoIcon /></a>
                <a href='#'><EnvelopeClosedIcon /></a>
            </Flex>
        </Flex>
        
        <Flex style={{marginTop: '3rem'}}>
            <Text size="1">Built using Next.js and RadixUI, deployed with GitHub Pages.</Text>
        </Flex>
    </footer>
  )
}

export default Footer