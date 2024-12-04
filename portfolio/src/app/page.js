import Image from "next/image";
import styles from "./page.module.css";
import { Heading, Blockquote, Text, Em, Separator, Flex, Card } from "@radix-ui/themes";
import StackIcon from "tech-stack-icons";



export default function Home() {
  return (
    <div id="home" className={styles.page}>

      <main  className={styles.main}>
        <Blockquote size="9" weight="bold" color="">
          <Em>Welcome!</Em>
        </Blockquote>

        <section id="about" className={styles.sectionContainer}>
          
          <Flex gap="3" style={{marginBottom: '1rem'}}>
            <Image
              src="/pfp.jpg"
              width={100}
              height={100}
              alt="picture of me!"
              style={{display: 'flex', marginBottom: '1rem'}}
            />
            
            <Flex style={{marginBottom: '1rem', flexDirection: 'column'}}>
              <Heading size="8" weight="medium">Kane Svelan</Heading>
              <Heading size="4" weight="regular">Student | Software Developer</Heading>
            </Flex>
          </Flex>
          
          <Flex style={{marginBottom: '1rem'}}>
            <Text weight="light" style={{maxWidth: '45rem'}}>
              Senior Computer Science student expecting to graduate in Fall 2025. Aspiring 
              software developer with a foundation in JavaScript and C++, seeking an 
              internship opportunity to contribute to full-stack development and gain 
              hands-on experience with DevOps practices.

            </Text>
          </Flex>

          <Flex style={{flexDirection: 'column', width: '500px'}}>
            <Heading size="5" weight="medium">Techstack:</Heading>
            <Flex style={{justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
              <StackIcon name="js" className={styles.stackIcon}/>
              <StackIcon name="html5" className={styles.stackIcon}/>
              <StackIcon name="css3" className={styles.stackIcon}/>
              <StackIcon name="c++" className={styles.stackIcon}/>
              <StackIcon name="python" className={styles.stackIcon}/>
              <StackIcon name="reactjs" className={styles.stackIcon}/>
              <StackIcon name="nextjs2" className={styles.stackIcon}/>
              <StackIcon name="mysql" className={styles.stackIcon}/>
              <StackIcon name="mongodb" className={styles.stackIcon}/>
              <StackIcon name="docker" className={styles.stackIcon}/>
              <StackIcon name="git" className={styles.stackIcon}/>
            </Flex>
          </Flex>
        </section>

        <Separator />

        <section id="projects" className={styles.sectionContainer}>
          <Heading size="8">Projects</Heading>
          
        </section>

        <Separator />

        <section id="contact" className={styles.sectionContainer}>
          <Heading size="8">Contact Me!</Heading>
          
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Button
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Other Button
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
