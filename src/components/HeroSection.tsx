"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ProfileCard from "./ProfileCard";
import GradientText from "./GradientText";

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center relative w-full overflow-hidden"
    >
      {/* Radial gradient overlay */}
      <div aria-hidden className="absolute inset-0 z-10 pointer-events-none select-none w-full h-full"
        style={{ background: "radial-gradient(ellipse at center, rgba(100,116,139,0.12) 0%, rgba(100,116,139,0.08) 40%, transparent 80%)" }}
      />
      <div className="flex justify-center relative z-10 mb-2">
        <ProfileCard
          name="Pooria Doust"
          title="IT Support Technician | Cybersecurity Graduate | Python Developer"
          handle="Pooria_Doust"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/Pooria.png"
          miniAvatarUrl="/profile-icon.png"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 min-h-[2.5em] relative z-10">
        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
          <Typewriter
            words={['IT Support Technician','Cybersecurity Graduate','Python Developer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </GradientText>
      </h2>
      <p className="mb-8 text-base md:text-lg text-[var(--text-dark)] relative z-10">
        Passionate about solving complex problems, supporting users, and securing digital systems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        {/* Removed Download Resume and Contact Me buttons */}
      </div>
    </motion.section>
  );
};

export default HeroSection; 