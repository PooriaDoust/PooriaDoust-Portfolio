import ScrollFloat from "./ScrollFloat";
import SimpleTitle from "./SimpleTitle";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const projectCards = [
  {
    title: "Secure Web Server Deployment on AWS EC2",
    description: `Successfully deployed and secured a Linux-based web server using Amazon EC2. Configured key-based SSH access, IAM roles, and firewall rules. Installed and maintained a LAMP stack and set up basic monitoring to ensure high availability.`,
    tags: ["AWS", "Security", "Serverless"],
    tools: ["EC2", "IAM", "SSH", "Linux", "Apache", "CloudWatch"],
    link: "#project1"
  },
  {
    title: "Serverless Contact Form with Lambda & SES",
    description: `Built a serverless contact form backend using AWS Lambda, API Gateway, and Amazon SES. The system handles email notifications without maintaining a server, ensuring scalability and cost-efficiency.`,
    tags: ["Serverless", "Lambda", "SES"],
    tools: ["Lambda", "API Gateway", "SES", "IAM", "JSON"],
    link: "#project3"
  },
  {
    title: "Automated Backup & Archival System with S3",
    description: `Developed a secure data backup and archival system using S3 buckets with versioning, encryption, and lifecycle policies. Enabled automated data retention, reducing storage costs while maintaining compliance and availability.`,
    tags: ["AWS", "Backup", "Compliance"],
    tools: ["S3", "Lifecycle Policies", "S3 Encryption", "IAM"],
    link: "#project4"
  },
];

const ProjectsSection = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    viewport={{ once: true }}
    className="py-12 md:py-16 w-full"
  >
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
        Projects
      </ScrollFloat>
    </div>
    
    {/* Mobile fallback with SimpleTitle */}
    <div className="md:hidden">
      <SimpleTitle>Projects</SimpleTitle>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8 w-full">
      {projectCards.map((project) => (
        <div
          key={project.title}
          className="flex flex-col gap-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 border border-default h-full"
          style={{ background: 'var(--card, #fff)', color: 'var(--text-dark, #18181b)' }}
          tabIndex={0}
        >
          <div className="mb-1 text-left">
            <span className="font-semibold text-base md:text-lg text-left block break-words whitespace-normal">
              <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
                {project.title}
              </GradientText>
            </span>
          </div>
          <div className="text-base md:text-lg font-medium leading-relaxed text-[var(--text-dark)]">
            {project.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 w-full">
            {project.tags.map(tag => (
              <span key={tag} className="bg-blue-600/90 text-xs px-2 py-1 rounded-full font-semibold text-white">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2 w-full">
            {project.tools.map(tool => (
              <span key={tool} className="bg-gray-800/90 text-xs px-2 py-1 rounded font-medium text-white">{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.section>
);

export default ProjectsSection; 