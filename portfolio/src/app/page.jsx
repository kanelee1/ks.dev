import { Badge, Em, Flex, Heading, Separator, Text, Card, Button } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, DiscordLogoIcon, EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import styles from "./page.module.css";
import { Value } from "@radix-ui/themes/dist/cjs/components/data-list";


export default function Home() {
  return (
    <div id="about" className={styles.page}>
      <main className={styles.main}>
        <section id="about" className={styles.sectionContainer}>
          <Flex gapY="8" direction="column">
            <Flex gapY="2" direction="column">
              <Heading size="9" weight="bold">Kane Svelan</Heading>
              <Heading size="4" weight="regular">Student | Software Developer</Heading>
              <Flex gap="3">
                <a href="https://www.linkedin.com/in/kane-svelan/" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className={styles.socialIcon} />
                </a>

                <a href="https://github.com/kanelee1" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className={styles.socialIcon}/>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <DiscordLogoIcon className={styles.socialIcon}/>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <EnvelopeClosedIcon className={styles.socialIcon}/>
                </a>
              </Flex>
            </Flex>

            <Flex gapY="5" direction="column">
              
              <Heading size="5" weight="medium">ABOUT</Heading>
              <Text weight="light" color="gray">
                I am a Senior Computer Science student expecting to graduate in Fall 2025. 
                As an aspiring software developer with a strong background in web development, 
                I am seeking an internship opportunity where I can contribute to 
                innovative projects, embrace new challenges, and gain hands-on experience 
                with full-stack development.
              </Text>
            </Flex>
            
            <Flex gapY="2" direction="column">
              <Heading size="4" weight="light">Technical Skills:</Heading>
              <Flex gap="2" className={styles.badgeContainer}>
                <Badge radius="full" color="green" size="3">JavaScript</Badge>
                <Badge radius="full" color="green" size="3">C++</Badge>
                <Badge radius="full" color="green" size="3">HTML/CSS</Badge>
                <Badge radius="full" color="green" size="3">SQL</Badge>
              </Flex>

              <Flex gap="2" className={styles.badgeContainer}>
                <Badge radius="full" color="red" size="3">Git</Badge>
                <Badge radius="full" color="red" size="3">MongoDB</Badge>
                <Badge radius="full" color="red" size="3">MySQL</Badge>
                <Badge radius="full" color="red" size="3">AWS</Badge>
                <Badge radius="full" color="red" size="3">GCP</Badge>
              </Flex>
              
              <Flex gap="2" className={styles.badgeContainer}>
                <Badge radius="full" color="indigo" size="3">React.js</Badge>
                <Badge radius="full" color="indigo" size="3">Next.js</Badge>
                <Badge radius="full" color="indigo" size="3">Node.js</Badge>
              </Flex>

              <Flex gap="2" className={styles.badgeContainer}>
                <Badge radius="full" color="orange" size="3">RadixUI</Badge>
                <Badge radius="full" color="orange" size="3">Motion</Badge>
              </Flex>
  
            </Flex>
          </Flex>
        </section>

        <Separator className={styles.separator}/>

        <section id="projects" className={styles.sectionContainer}>
          <Flex gapY="5" direction="column">
            <Heading size="5" weight="medium">PROJECTS</Heading>

            <Flex gap="7" className={styles.cardContainer}>
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gapY="2" direction="column">
                  <Heading size="5" weight="light">PIC Health PWA</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge radius="full" color="green" size="2">JavaScript</Badge>
                    <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                    <Badge radius="full" color="blue" size="2">React Native</Badge>
                    <Badge radius="full" color="red" size="2">Google Calendar API</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light">Event and health resource management tool developed for the Pacific Islander Health organization and CSUSM Capstone Project.</Text></li>
                    <li><Text color="gray" weight="light">Developed in React Native implementing native functionality for both Android and iOS users.</Text></li>
                    <li><Text color="gray" weight="light">Implemented features including event fetching, filtering, and displaying using the Google Calendar API and PIC Health master calendar.</Text></li>
                  </ul>
                </Flex>
              </Card>
  
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gap="2" direction="column">
                  <Heading size="5" weight="light">SeniorSync</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge radius="full" color="green" size="2">JavaScript</Badge>
                    <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                    <Badge radius="full" color="red" size="2">Pocketbase API</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light">Web app enabeling family members of senior citizens to monitor their relatives' health and activities.</Text></li>
                    <li><Text color="gray" weight="light">Implemented user authentication and family member database relationships through Pocketbase dashboard.</Text></li>
                    <li><Text color="gray" weight="light">Designed UI/UX, including an interactive user dashboard to display health, activities, and upcoming social events.</Text></li>
                  </ul>
                </Flex>
              </Card>
  
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gap="2" direction="column">
                  <Heading size="5" weight="light">Student Forum</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge radius="full" color="green" size="2">JavaScript</Badge>
                    <Badge radius="full" color="green" size="2">HTML/CSS</Badge>
                    <Badge radius="full" color="green" size="2">PHP</Badge>
                    <Badge radius="full" color="red" size="2">MySQL</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light">Reddit-style web forum tailored for students to create threads, comment on posts and search through boards.</Text></li>
                    <li><Text color="gray" weight="light">Implemented features like user authentication, profile customization and post favoriting.</Text></li>
                    <li><Text color="gray" weight="light">Server side computation written in PHP for database interaction and CRUD functionality.</Text></li>
                  </ul>
                </Flex>
              </Card>
            </Flex>

            <a href="/resume.pdf" className={styles.anchor} target="_blank" rel="noopener noreferrer">
              <Text className={styles.anchorText} weight="bold">View Full Resume</Text>
              <ArrowRightIcon className={styles.arrowRightIcon}/>
            </a>

          </Flex>

        </section>

        <Separator className={styles.separator}/>

        <section id="contact" className={styles.sectionContainer}>
          <Flex gapy="2" direction="column">
            <Heading size="5" weight="medium">Contact Me!</Heading>
          </Flex>
          
        </section>
        <footer className={styles.footer}>
          <Text size="1">Built using Next.js and RadixUI, deployed with GitHub Pages.</Text>
        </footer>
      </main>
    </div>
  );
}
