import { motion } from "framer-motion";
import ScrollFloat from "./ScrollFloat";
import SimpleTitle from "./SimpleTitle";
import TextType from "./TextType";

const AboutSection = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
    className="py-12 md:py-16 w-full"
  >
    {/* Section divider */}
    <div className="w-full h-px bg-gradient-accent mb-12"></div>
    
    {/* Desktop version with ScrollFloat */}
    <div className="hidden md:block">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-gradient-heading"
      >
        About Me
      </ScrollFloat>
    </div>
    
    {/* Mobile fallback with SimpleTitle */}
    <div className="md:hidden">
      <SimpleTitle>About Me</SimpleTitle>
    </div>
    
    <div className="flex flex-col gap-4 p-6 md:p-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        viewport={{ once: true }}
        className="rounded-xl shadow-lg p-6 md:p-8 transition-shadow border border-default"
        style={{ background: 'var(--card, #fff)', color: 'var(--text-dark-soft, #18181b)' }}
      >
        {/* Desktop content with regular text */}
        <div className="hidden md:block">
          <div className="text-lg md:text-xl font-semibold leading-relaxed" style={{ color: 'var(--text-dark-soft)' }}>
            <p className="mb-6">
              Hi, I’m Pooria 👋, an IT Support Technician with over five years of experience keeping systems secure, reliable, and users productive. I thrive on solving technical challenges, from diagnosing complex network issues to automating routine tasks with Python to streamline IT operations.
            </p>
            <p className="mb-6">
              I hold a Master of Information Technology, majoring in Cybersecurity and Networking, from Murdoch University. My expertise includes endpoint security, network diagnostics (Wireshark, auditd), and proactive risk management. I&apos;ve supported diverse environments across Windows and Linux, helping reduce downtime and drive digital transformation.
            </p>
            <p className="mb-6">
              I&apos;m passionate about bridging the gap between technology and people by delivering user-focused solutions with calm, clarity, and a mindset of continuous improvement. Whether it&apos;s deploying systems, securing infrastructure, or resolving urgent tickets, I bring curiosity and commitment to every challenge.
            </p>
            <p>
              Outside of work, you&apos;ll often find me exploring new cybersecurity tools, refining Python scripts, or optimizing my home lab with a good cup of coffee.
            </p>
          </div>
        </div>
        
        {/* Mobile content with continuous typing animation */}
        <div className="md:hidden">
          <div className="text-base font-semibold leading-relaxed">
            <TextType 
              text={[
                "Hi, I’m Pooria 👋, an IT Support Technician with 5+ years of experience solving technical issues and securing systems across Windows and Linux.\n\nI hold a Master of Information Technology (Cybersecurity & Networking) from Murdoch University and specialize in Python automation, network diagnostics, and endpoint protection.\n\nOutside of work, you'll often find me exploring new cybersecurity tools, refining Python scripts, or optimizing my home lab with a good cup of coffee."
              ]}
              typingSpeed={20}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              startOnVisible={true}
              loop={false}
              className="text-content-soft"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default AboutSection; 