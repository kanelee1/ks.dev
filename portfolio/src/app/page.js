import Image from "next/image";
import styles from "./page.module.css";
import { Heading, Blockquote, Text, Em, Separator, Code, Flex } from "@radix-ui/themes";

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
              <Heading size="8">Kane Svelan</Heading>
              <Heading size="4" weight="medium">Student | Software Developer</Heading>
            </Flex>
          </Flex>
          
          <Flex>
            <Text weight="light" style={{maxWidth: '45rem'}}>
              Junior enrolled at Cal State University San Marcos pursuing a degree in 
              Computer Information Systems, expecting to graduate in Fall 2025. Aspiring 
              software developer with a foundation in JavaScript and C++, seeking an 
              internship opportunity to contribute to full-stack development and gain 
              hands-on experience with DevOps practices.

            </Text>
          </Flex>
        </section>

        <section id="projects" className={styles.sectionContainer}>
          <Heading size="8">Projects</Heading>
        </section>

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
