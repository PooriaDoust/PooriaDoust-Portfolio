import GradientText from "./GradientText";

const Footer = () => (
  <footer className="w-full mt-24 relative z-10">
    <div className="h-px w-full bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-transparent" />
    <div className="py-8 text-center text-sm text-[var(--text-dark-soft)]">
      <p className="mb-2">
        © 2025 {" "}
        <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false}>
          Pooria Mohammad Doust
        </GradientText>
        . All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;