import { Badge, Em, Flex, Heading, Separator, Text, Section } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { SocialIcon } from "react-social-icons/component";
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/email'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { wrap } from "framer-motion";


export default function Home() {
  return (
    <div id="about" className={styles.page}>
      <main className={styles.main}>

        <section id="about" className={styles.sectionContainer}>
          <Flex gapY="8" style={{flexDirection: 'column'}}>
            <Flex gapY="2" style={{ flexDirection: 'column'}}>
              <Heading size="8" weight="bold">Kane Svelan</Heading>
              <Heading size="4" weight="regular">Student | Software Developer</Heading>
              <Flex gap="3">
                <Link href="https://www.linkedin.com/in/kane-svelan/" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="https://github.com/kanelee1" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="#">
                  <DiscordLogoIcon color="grey"  style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="#">
                  <EnvelopeClosedIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>
              </Flex>
            </Flex>

            <Flex gapY="2" style={{flexDirection: 'column'}}>
              <Heading size="5" weight="medium">ABOUT</Heading>
              <Text weight="light" color="gray" style={{maxWidth: '45rem'}}>
                Senior Computer Science student expecting to graduate in Fall 2050. 
                Aspiring software developer with a strong background in web development, 
                I am seeking an internship opportunity where I can contribute to 
                innovative projects, embrace new challenges, and gain hands-on experience 
                with modern DevOps practices. I'd love to help your team!
              </Text>
            </Flex>
            
            <Flex gapY="2" style={{flexDirection: 'column'}}>
              <Heading size="4" weight="light">Technical Skills:</Heading>
              <Flex gap="2">
                <Badge color="green" size="2">JavaScript</Badge>
                <Badge color="green" size="2">C++</Badge>
                <Badge color="green" size="2">HTML/CSS</Badge>
                <Badge color="green" size="2">SQL</Badge>
              </Flex>

              <Flex gap="2">
                <Badge color="red" size="2">Git</Badge>
                <Badge color="red" size="2">MongoDB</Badge>
                <Badge color="red" size="2">MySQL</Badge>
                <Badge color="red" size="2">AWS</Badge>
                <Badge color="red" size="2">GCP</Badge>
              </Flex>
              
              <Flex gap="2">
                <Badge color="indigo" size="2">React.js</Badge>
                <Badge color="indigo" size="2">Next.js</Badge>
                <Badge color="indigo" size="2">Node.js</Badge>
              </Flex>

              <Flex gap="2">
                <Badge color="orange" size="2">RadixUI</Badge>
                <Badge color="orange" size="2">Motion</Badge>
              </Flex>
  
            </Flex>
          </Flex>
        </section>

        <Separator />

        <section id="projects" className={styles.sectionContainer}>
          <Flex gap="8" style={{flexDirection: 'column'}}>
            <Heading size="5" weight="medium">PROJECTS</Heading>

            <Flex gapY="2" style={{flexDirection: 'column'}}>
              <Heading size="5" weight="light">PIC Health PWA</Heading>
              <Flex gap="1">
                <Badge color="green">JavaScript</Badge>
                <Badge color="green">HTML/CSS</Badge>
                <Badge color="blue">React Native</Badge>
                <Badge color="red">Google Calendar API</Badge>
              </Flex>
              <ul className={styles.listContainer}>
                <li>Event and health resource management tool for the Pacific Islander Health organization</li>
                <li>Implemented features includng fetching, filtering, and displaying upcoming events.</li>
                <li>User event requests and submission forms can be filled out via Google Forms API</li>
              </ul>
            </Flex>

            <Flex gap="2" style={{flexDirection: 'column'}}>
              <Heading size="5" weight="light">SeniorSync</Heading>
              <Flex gap="1">
                <Badge color="green">JavaScript</Badge>
                <Badge color="green">HTML/CSS</Badge>
                <Badge color="red">Pocketbase API</Badge>
              </Flex>
              <ul className={styles.listContainer}>
                <li>Web app enabeling family members of senior citizens to monitor their relatives' health and activities.</li>
                <li>Implemented user authentication and family member database relationships through Pocketbase dashboard</li>
                <li>Designed UI/UX, including an interactive user dashboard to display health, activities, and upcoming social events</li>
              </ul>
            </Flex>

            <Flex gap="2" style={{flexDirection: 'column'}}>
              <Heading size="5" weight="light">Student Forum</Heading>
              <Flex gap="1">
                <Badge color="green">JavaScript</Badge>
                <Badge color="green">HTML/CSS</Badge>
                <Badge color="green">PHP</Badge>
                <Badge color="red">MySQL</Badge>
              </Flex>
              <ul className={styles.listContainer}>
                <li>Reddit-style web forum tailored for CSUSM students to create threads and comment</li>
                <li>Implemented features like user authentication, profile customization, post favoriting</li>
                <li>Server side computation written in PHP for database interaction and CRUD functionality</li>
              </ul>
            </Flex>

          </Flex>
        </section>

        <Separator />

        <section id="contact" className={styles.sectionContainer}>
          <Heading size="5" weight="medium">Contact Me!</Heading>
          
        </section>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
