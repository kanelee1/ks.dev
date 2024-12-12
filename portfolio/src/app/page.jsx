import { Badge, Em, Flex, Heading, Separator, Text, Card } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { color, motion } from "framer-motion";
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/email'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div id="about" className={styles.page}>
      <main className={styles.main}>

        <section id="about" className={styles.sectionContainer}>
          <Flex gapY="8" style={{flexDirection: 'column'}}>
            <Flex gapY="2" style={{ flexDirection: 'column'}}>
              <Heading size="9" weight="bold">Kane Svelan</Heading>
              <Heading size="4" weight="regular">Student | Software Developer</Heading>
              <Flex gap="3">
                <Link href="https://www.linkedin.com/in/kane-svelan/" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="https://github.com/kanelee1" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="#">
                  <DiscordLogoIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>

                <Link href="#">
                  <EnvelopeClosedIcon color="grey" style={{ height: 25, width: 25 }} />
                </Link>
              </Flex>
            </Flex>

            <Separator />

            <Flex gapY="2" style={{flexDirection: 'column'}}>
              <Heading size="5" weight="medium">ABOUT</Heading>
              <Text weight="light" color="gray" style={{maxWidth: '45rem'}}>
                Computer Science student expecting to graduate in Fall 2025. 
                Aspiring software developer with a strong background in web development, 
                I am seeking an internship opportunity where I can contribute to 
                innovative projects, embrace new challenges, and gain hands-on experience 
                with modern DevOps practices. I'd love to help your team!
              </Text>
            </Flex>
            
            <Flex gapY="2" style={{flexDirection: 'column'}}>
              <Heading size="4" weight="light">Technical Skills:</Heading>
              <Flex gap="2">
                <Badge radius="full" color="green" size="3">JavaScript</Badge>
                <Badge radius="full" color="green" size="3">C++</Badge>
                <Badge radius="full" color="green" size="3">HTML/CSS</Badge>
                <Badge radius="full" color="green" size="3">SQL</Badge>
              </Flex>

              <Flex gap="2">
                <Badge radius="full" color="red" size="3">Git</Badge>
                <Badge radius="full" color="red" size="3">MongoDB</Badge>
                <Badge radius="full" color="red" size="3">MySQL</Badge>
                <Badge radius="full" color="red" size="3">AWS</Badge>
                <Badge radius="full" color="red" size="3">GCP</Badge>
              </Flex>
              
              <Flex gap="2">
                <Badge radius="full" color="indigo" size="3">React.js</Badge>
                <Badge radius="full" color="indigo" size="3">Next.js</Badge>
                <Badge radius="full" color="indigo" size="3">Node.js</Badge>
              </Flex>

              <Flex gap="2">
                <Badge radius="full" color="orange" size="3">RadixUI</Badge>
                <Badge radius="full" color="orange" size="3">Motion</Badge>
              </Flex>
  
            </Flex>
          </Flex>
        </section>

        <Separator />

        <section id="projects" className={styles.sectionContainer}>
          <Flex gap="8" style={{flexDirection: 'column'}}>
            <Heading size="5" weight="medium">PROJECTS</Heading>

            <Card size="3">
              <Flex gapY="2" style={{flexDirection: 'column'}}>
                <Heading size="5" weight="light">This Website!</Heading>
                <Flex gap="1">
                  <Badge radius="full" color="green" size="2">JavaScript</Badge>
                  <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                  <Badge radius="full" color="blue" size="2">Next.js</Badge>
                  <Badge radius="full" color="orange" size="2">RadixUI</Badge>
                </Flex>
                <ul className={styles.listContainer}>
                  <li><Text color="gray" weight="regular" >Designed responsive, minimalistic web portfolio with clean colorscheme...I think (colorblind).</Text></li>
                  <li><Text color="gray" weight="regular">Implemented features includng page routing, animations, and light/dark mode switching.</Text></li>
                  <li><Text color="gray" weight="regular"></Text></li>
                </ul>
              </Flex>
            </Card>

            <Card size="3">
              <Flex gapY="2" style={{flexDirection: 'column'}}>
                <Heading size="5" weight="light">PIC Health PWA</Heading>
                <Flex gap="1">
                  <Badge radius="full" color="green" size="2">JavaScript</Badge>
                  <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                  <Badge radius="full" color="blue" size="2">React Native</Badge>
                  <Badge radius="full" color="red" size="2">Google Calendar API</Badge>
                </Flex>
                <ul className={styles.listContainer}>
                  <li><Text color="gray" weight="regular" >Event and health resource management tool for the Pacific Islander Health organization.</Text></li>
                  <li><Text color="gray" weight="regular">Implemented features includng fetching, filtering, and displaying upcoming events.</Text></li>
                  <li><Text color="gray" weight="regular">User event requests and submission forms can be filled out via Google Forms API.</Text></li>
                </ul>
              </Flex>
            </Card>

            <Card size="3">
              <Flex gap="2" style={{flexDirection: 'column'}}>
                <Heading size="5" weight="light">SeniorSync</Heading>
                <Flex gap="1">
                  <Badge radius="full" color="green" size="2">JavaScript</Badge>
                  <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                  <Badge radius="full" color="red" size="2">Pocketbase API</Badge>
                </Flex>
                <ul className={styles.listContainer}>
                  <li><Text color="gray" weight="regular">Web app enabeling family members of senior citizens to monitor their relatives' health and activities.</Text></li>
                  <li><Text color="gray" weight="regular">Implemented user authentication and family member database relationships through Pocketbase dashboard.</Text></li>
                  <li><Text color="gray" weight="regular">Designed UI/UX, including an interactive user dashboard to display health, activities, and upcoming social events.</Text></li>
                </ul>
              </Flex>
            </Card>

            <Card size="3">
              <Flex gap="2" style={{flexDirection: 'column'}}>
                <Heading size="5" weight="light">Student Forum</Heading>
                <Flex gap="1">
                  <Badge radius="full" color="green" size="2">JavaScript</Badge>
                  <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                  <Badge radius="full" color="green" size="2">PHP</Badge>
                  <Badge radius="full" color="red" size="2">MySQL</Badge>
                </Flex>
                <ul className={styles.listContainer}>
                  <li><Text color="gray" weight="regular">Reddit-style web forum tailored for CSUSM students to create threads, comment on posts and search through boards.</Text></li>
                  <li><Text color="gray" weight="regular">Implemented features like user authentication, profile customization and post favoriting.</Text></li>
                  <li><Text color="gray" weight="regular">Server side computation written in PHP for database interaction and CRUD functionality.</Text></li>
                </ul>
              </Flex>
            </Card>

            <a href="#" className={styles.anchor}>
              <Text className={styles.anchorText} weight="bold">View Full Resume</Text>
              <ArrowRightIcon className={styles.arrowRightIcon}/>
            </a>

          </Flex>

        </section>

        <Separator />

        <section id="contact" className={styles.sectionContainer}>
          <Heading size="5" weight="medium">Contact Me!</Heading>
          
        </section>
      </main>
      <footer className={styles.footer}>
        <Text>Built using Next.js and RadixUI by me :)</Text>
      </footer>
    </div>
  );
}
