export default function Head() {
  return (
    <>
      <title>Pooria Mohammad Doust | Portfolio</title>
      <meta name="description" content="Professional portfolio of Pooria Mohammad Doust - IT Support, Networking, Programming, and more." />
      {/* Canonical URL */}
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"} />
      <meta property="og:title" content="Pooria Mohammad Doust | Portfolio" />
      <meta property="og:description" content="Professional portfolio of Pooria Mohammad Doust - IT Support, Networking, Programming, and more." />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/og-image.png`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pooria Mohammad Doust Portfolio" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"} />
      <meta property="og:locale" content="en_US" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Pooria Mohammad Doust | Portfolio" />
      <meta name="twitter:description" content="Professional portfolio of Pooria Mohammad Doust - IT Support, Networking, Programming, and more." />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"}/og-image.png`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a0a0a" />
      
      {/* Favicon using new profile image */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/png" href="/profile-icon.png?v=4&t=2025" />
      <link rel="shortcut icon" type="image/png" href="/profile-icon.png?v=4&t=2025" />
      <link rel="apple-touch-icon" href="/profile-icon.png?v=4&t=2025" />
      <link rel="icon" type="image/png" sizes="32x32" href="/profile-icon.png?v=4&t=2025" />
      <link rel="icon" type="image/png" sizes="16x16" href="/profile-icon.png?v=4&t=2025" />
      <link rel="icon" type="image/png" sizes="48x48" href="/profile-icon.png?v=4&t=2025" />
      <link rel="icon" type="image/png" sizes="192x192" href="/profile-icon.png?v=4&t=2025" />
      <link rel="icon" type="image/png" sizes="512x512" href="/profile-icon.png?v=4&t=2025" />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pooria Mohammad Doust",
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com/",
            sameAs: [
              "https://www.linkedin.com/in/pooriamohammaddoust/"
            ],
            jobTitle: "IT Support Specialist | Network Engineer | Programmer",
            image: "/og-image.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Perth",
              addressCountry: "Australia"
            },
            email: "mailto:pooria.mohammaddoust@gmail.com"
          })
        }}
      />
    </>
  );
} 