import TiltedCard from "./TiltedCard";
import ScrollFloat from "./ScrollFloat";
import SimpleTitle from "./SimpleTitle";
import { motion } from "framer-motion";

const certImages = [
  "/cert/Screenshot 2025-07-03 145325.jpg",
  "/cert/Screenshot 2025-07-03 145244.jpg",
  "/cert/Screenshot 2025-07-03 145213.jpg",
  "/cert/Screenshot 2025-07-03 145057.jpg",
  "/cert/1720167941842.jpeg",
  "/cert/1719825495211.jpeg",
];

const topLeftIdx = 0;
const bottomLeftIdx = certImages.length >= 3 ? certImages.length - 3 : certImages.length - 1;
const bottomMiddleIdx = certImages.length - 2;
const bottomRightIdx = certImages.length - 1;
const topMiddleIdx = 1;
const topRightIdx = 2;

const CertificationsSection = () => (
  <motion.section
    id="certifications"
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
        Certifications
      </ScrollFloat>
    </div>
    
    {/* Mobile fallback with SimpleTitle */}
    <div className="md:hidden">
      <SimpleTitle>Certifications</SimpleTitle>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8 w-full">
      {(() => {
        const certLinks = [
          "https://coursera.org/share/551c7ce05c59a25da67a7fbef878c780",
          "https://www.coursera.org/account/accomplishments/verify/JZLF6TN83JEU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
          "https://www.coursera.org/account/accomplishments/verify/AW8KLGRDWF3F?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
          "https://www.coursera.org/account/accomplishments/verify/5NSVM4ZKWTAA",
          "https://www.linkedin.com/learning/certificates/38c26b2a15c49ddade324325dfe7262288b275f9d127bcfb3f39ddc2d1b19ed5",
          "https://www.linkedin.com/learning/certificates/01b0cfcc7d5650064492df136ff78442acc829eb93dbf0cbed7e0c423c2cf8e7",
        ];
        return certImages.map((src, idx) => (
          <a
            key={src}
            href={certLinks[idx]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open certificate ${idx + 1}`}
            style={{ display: 'block' }}
          >
            <TiltedCard
              imageSrc={src}
              altText={`Certificate ${idx + 1}`}
              containerHeight="320px"
              containerWidth="100%"
              imageHeight="320px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </a>
        ));
      })()}
    </div>
  </motion.section>
);

export default CertificationsSection; 