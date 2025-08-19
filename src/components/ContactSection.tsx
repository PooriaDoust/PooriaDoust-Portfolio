import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import ScrollFloat from "./ScrollFloat";
import SimpleTitle from "./SimpleTitle";

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Perth, Australia",
    href: null,
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "pooria.mohammaddoust@gmail.com",
    href: "mailto:pooria.mohammaddoust@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pooriamohammaddoust",
    href: "https://linkedin.com/in/pooriamohammaddoust",
  },
];

const ContactSection = () => (
  <motion.section
    id="contact"
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
        Contact
      </ScrollFloat>
    </div>
    
    {/* Mobile fallback with SimpleTitle */}
    <div className="md:hidden">
      <SimpleTitle>Contact</SimpleTitle>
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 w-full"
      style={{ background: 'var(--card, #fff)', color: 'var(--text-dark, #18181b)', borderRadius: '0.75rem', boxShadow: '0 4px 24px 0 rgba(37,99,235,0.08)' }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-xl md:text-2xl font-semibold text-[var(--text-dark)] mb-12"
      >
        Feel free to reach out for collaboration, opportunities, or just to connect!
      </motion.p>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch">
        {contactDetails.map(({ icon: Icon, label, value, href }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[200px] flex-1 border border-default"
          >
            {href ? (
              <a
                href={href}
                target={label === 'LinkedIn' ? '_blank' : undefined}
                rel={label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center h-full cursor-pointer group"
                aria-label={`${label}: ${value}`}
              >
                <div className="text-3xl text-accent-2 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon />
                </div>
                <div className="flex flex-col items-center flex-1">
                  <h3 className="text-lg font-semibold text-primary-light mb-2">{label}</h3>
                  <span className="text-base md:text-lg font-medium text-[var(--text-dark)] text-center leading-tight break-all">{value}</span>
                </div>
              </a>
            ) : (
              <>
                <div className="text-3xl text-accent-2 mb-4 flex items-center justify-center">
                  <Icon />
                </div>
                <div className="flex flex-col items-center flex-1">
                  <h3 className="text-lg font-semibold text-primary-light mb-2">{label}</h3>
                  <span className="text-base md:text-lg font-medium text-[var(--text-dark)] text-center leading-tight">{value}</span>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 pt-8 border-t border-accent-2 text-center"
      >
        <p className="text-sm text-[var(--text-dark)]">
          <span className="text-base md:text-lg font-medium">Let&apos;s connect! I&apos;m open to IT support or cybersecurity roles and happy to chat.</span>
        </p>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default ContactSection; 