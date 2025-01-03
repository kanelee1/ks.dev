import { Badge, Flex, Heading, Text, Card } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, PaperPlaneIcon, EnvelopeClosedIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import styles from "./page.module.css";


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
                  <LinkedInLogoIcon height="25" width="25" className={styles.socialIcon} />
                </a>

                <a href="https://github.com/kanelee1" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon height="25" width="25" className={styles.socialIcon}/>
                </a>

                <a href="mailto:svela002@csusm.edu" target="_blank" rel="noopener noreferrer">
                  <EnvelopeClosedIcon height="25" width="25" className={styles.socialIcon}/>
                </a>
              </Flex>
            </Flex>

            <Flex gapY="5" direction="column">
              
              <Heading size="5" weight="medium">ABOUT</Heading>
              <Text weight="light" color="gray">
                I am a Senior Computer Science student based in San Diego, CA expecting to graduate in Fall 2025. 
                As an aspiring software developer with a strong background in web development, 
                I am seeking an internship opportunity where I can contribute to 
                innovative projects, embrace new challenges, and gain hands-on experience 
                with full-stack development.
              </Text>
            </Flex>
            
            <Flex gapY="2" direction="column">
              <Heading size="4" weight="light">Technical Skills:</Heading>
              <Flex gap="2" className={styles.badgeContainer}>
                <Badge variant="soft" radius="full" color="amber" size="3" className={styles.badge}>JavaScript</Badge>
                <Badge variant="soft" radius="full" color="amber" size="3" className={styles.badge}>C++</Badge>
                <Badge variant="soft" radius="full" color="amber" size="3" className={styles.badge}>HTML/CSS</Badge>
                <Badge variant="soft" radius="full" color="amber" size="3" className={styles.badge}>SQL</Badge>
              </Flex>

              <Flex gap="2" className={styles.badgeContainer}>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>Git</Badge>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>Vercel</Badge>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>MongoDB</Badge>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>MySQL</Badge>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>AWS</Badge>
                <Badge variant="soft" radius="full" color="tomato" size="3" className={styles.badge}>GCP</Badge>
              </Flex>
              
              <Flex gap="2" className={styles.badgeContainer}>
                <Badge variant="soft" radius="full" color="indigo" size="3" className={styles.badge}>React.js</Badge>
                <Badge variant="soft" radius="full" color="indigo" size="3" className={styles.badge}>React Native</Badge>
                <Badge variant="soft" radius="full" color="indigo" size="3" className={styles.badge}>Next.js</Badge>
                <Badge variant="soft" radius="full" color="indigo" size="3" className={styles.badge}>Node.js</Badge>
              </Flex>

              <Flex gap="2" className={styles.badgeContainer}>
                <Badge variant="soft" radius="full" color="orange" size="3" className={styles.badge}>RadixUI</Badge>
                <Badge variant="soft" radius="full" color="orange" size="3" className={styles.badge}>Framer Motion</Badge>
              </Flex>
  
            </Flex>
          </Flex>
        </section>

        <Flex className={styles.separator} />

        <section id="projects" className={styles.sectionContainer}>
          <Flex gapY="5" direction="column">
            <Heading size="5" weight="medium">PROJECTS</Heading>

            <Flex gap="7" className={styles.cardContainer}>
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gapY="2" direction="column">
                  <Heading size="4" weight="regular">PIC Health PWA</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>JavaScript</Badge>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>HTML/CSS</Badge>
                    <Badge variant="soft" radius="full" color="blue" size="2" className={styles.badge}>React Native</Badge>
                    <Badge variant="soft" radius="full" color="tomato" size="2" className={styles.badge}>Google Calendar API</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Event and health resource management tool developed for the Pacific Islander Health organization and CSUSM Capstone Project.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Developed in React Native implementing native functionality for both Android and iOS users.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Implemented features including event fetching, filtering, and displaying using the Google Calendar API and PIC Health master calendar.</Text></li>
                  </ul>
                </Flex>
              </Card>
  
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gap="2" direction="column">
                  <Heading size="4" weight="regular">SeniorSync</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>JavaScript</Badge>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>HTML/CSS</Badge>
                    <Badge variant="soft" radius="full" color="tomato" size="2" className={styles.badge}>Pocketbase API</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Web app enabeling family members of senior citizens to monitor their relatives&apos; health and activities.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Implemented user authentication and family member database relationships through Pocketbase dashboard.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Designed UI/UX, including an interactive user dashboard to display health, activities, and upcoming social events.</Text></li>
                  </ul>
                </Flex>
              </Card>
  
              <Card size="3" variant="ghost" className={styles.card}>
                <Flex gap="2" direction="column">
                  <Heading size="4" weight="regular">Student Forum</Heading>
                  <Flex gap="1" className={styles.badgeContainer}>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>JavaScript</Badge>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>HTML/CSS</Badge>
                    <Badge variant="soft" radius="full" color="amber" size="2" className={styles.badge}>PHP</Badge>
                    <Badge variant="soft" radius="full" color="tomato" size="2" className={styles.badge}>MySQL</Badge>
                  </Flex>
                  <ul className={styles.listContainer}>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Reddit-style web forum tailored for students to create threads, comment on posts and search through boards.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Implemented features like user authentication, profile customization and post favoriting.</Text></li>
                    <li><Text color="gray" weight="light" className={styles.listItemText}>Server side computation written in PHP for database interaction and CRUD functionality.</Text></li>
                  </ul>
                </Flex>
              </Card>
              <Flex>
                <a href="/resume.pdf" className={styles.anchor} target="_blank" rel="noopener noreferrer">
                  <Text className={styles.anchorText} weight="regular">View Full Resume</Text>
                  <ArrowRightIcon className={styles.arrowRightIcon}/>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </section>

        <Flex className={styles.separator} />

        <section id="contact" className={styles.sectionContainer}>
          <Flex gapY="5" direction="column">
            <Heading size="5" weight="medium">CONTACT</Heading>
            <Flex gapY="1" direction="column">
              <Text weight="light" color="gray">
                If you&apos;d like to get in touch, please feel free to reach out using the following methods.
              </Text>
              <Text weight="light" color="gray">
                My preferred method of contact is through email or LinkedIn.
              </Text>
            </Flex>
            <Flex direction="column">
              <Heading size="4" weight="medium">Email</Heading>
              <a href="mailto:svela002@csusm.edu" className={styles.contactAnchor} target="_blank" rel="noopener noreferrer">
                <Text color="gray" weight="light">svela002@csusm.edu</Text>
              </a>
            </Flex>
            <Flex direction="column">
              <Heading size="4" weight="medium">LinkedIn</Heading>
              <a href="https://www.linkedin.com/in/kane-svelan/" className={styles.contactAnchor} target="_blank" rel="noopener noreferrer">
                <Text color="gray" weight="light">linkedin.com/in/kane-svelan/</Text>
              </a>
            </Flex>
            <Flex direction="column">
              <Heading size="4" weight="medium">GitHub</Heading>
              <a href="https://github.com/kanelee1" className={styles.contactAnchor} target="_blank" rel="noopener noreferrer">
                <Text color="gray" weight="light">github.com/kanelee1</Text>
              </a>
            </Flex>
          </Flex>
        </section>
      </main>
    </div>
  );
}
