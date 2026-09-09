"use client";

import TeamHero from "./TeamHero";
import TeamMember from "./TeamMember";
import TeamClosing from "./TeamClosing";

const members = [
  {
    number: "01",
    name: "Navdeep Singh",
    role: "Founder",
    image: "/team/navdeep.jpeg",
    bio: "Navdeep leads the vision and media direction of AT MEDIA. He is also the person behind Ambaa Talks, our independent conversation and media platform, where we explore ideas, people, businesses and stories through long-form conversations. At AT MEDIA, Navdeep focuses on media strategy, original content, partnerships and the bigger vision for the company.",
    quote: "Ambaa Talks is where our media journey began.",
    link: { href: "https://www.youtube.com/@AmbaaTalks", label: "Watch Ambaa Talks", icon: "play" },
  },
  {
    number: "02",
    name: "Harsh Varlani",
    role: "Co-Founder & Creative Director",
    image: "/team/harsh.jpeg",
    bio: "Harsh leads the creative and production side of AT MEDIA. With a background in video editing, graphic design and social content, he focuses on turning ideas and raw footage into content that is engaging, polished and built for modern platforms. His work spans short-form editing, visual storytelling, thumbnails and content systems.",
    quote: "Good editing isn't about adding more. It's about making the story impossible to ignore.",
    link: {
      href: "https://www.linkedin.com/in/harshvarlani-2b1a53221",
      label: "Connect on LinkedIn",
      icon: "linkedin",
    },
    reverse: true,
  },
  {
    number: "03",
    name: "Bhoomi",
    role: "General Manager",
    image: "/team/bhoomi.jpeg",
    bio: "Bhoomi leads the day-to-day management and operations at AT MEDIA. With a professional background in commercial real estate analysis, lease administration and stakeholder management, she brings an analytical and structured approach to the business. At AT MEDIA, Bhoomi focuses on operations, coordination, client management, internal processes and keeping the business running smoothly behind the creative work.",
    quote: "Her role is to make sure that while the creative team focuses on creating, the business stays organized, accountable and moving forward.",
  },
];

export default function TeamSection() {
  return (
    <main className="relative overflow-hidden">
      <TeamHero />

      <section className="px-4 sm:px-6 lg:px-8">
        {members.map((member) => (
          <TeamMember key={member.number} {...member} />
        ))}
      </section>

      <TeamClosing />
    </main>
  );
}
