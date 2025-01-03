import React from 'react'
import styles from './PageFooter.module.css'
import { Flex, Text } from '@radix-ui/themes'
import { LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Flex width="100%" justify="between" className={styles.content}>
            <Flex direction="column">
                <Text size="1">© Kane Svelan 2025</Text>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><Text size="1">Full Resume</Text></a>
                <a href="https://github.com/kanelee1/ks.dev/tree/main/portfolio" target="_blank" rel="noopener noreferrer"><Text size="1">View Source</Text></a>
            </Flex>
            <Flex gapX="2">
                <a href='https://www.linkedin.com/in/kane-svelan/' target="_blank" rel="noopener noreferrer"><LinkedInLogoIcon className={styles.socialIcon}/></a>
                <a href='https://github.com/kanelee1' target="_blank" rel="noopener noreferrer"><GitHubLogoIcon className={styles.socialIcon}/></a>
                <a href='mailto:svela002@csusm.edu' target="_blank" rel="noopener noreferrer"><EnvelopeClosedIcon className={styles.socialIcon}/></a>
            </Flex>
        </Flex>
        
        <Flex style={{marginTop: '3rem', alignItems: 'center', justifyContent: 'center'}}>
            <Text size="1">Built using Next.js and RadixUI</Text>
        </Flex>
    </footer>
  )
}

export default Footer