"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";

const TAB_DATA = {
  skills: (
    <ul className="list-disc pl-2">
      <li>Node.js</li>
      <li>Express</li>
      <li>PostgreSQL</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
  ),
  education: (
    <ul className="list-disc pl-2">
      <li>Dicoding</li>
      <li>Senior High School</li>
    </ul>
  ),
  certifications: (
    <ul className="list-disc pl-2">
      <li>Belajar Dasar Pemrograman JavaScript by Dicoding</li>
      <li>Memulai Pemrograman Dengan Java by Dicoding</li>
      <li>Cloud Practitioner Essentials Belajar Dasar AWS Cloud by Dicoding</li>
    </ul>
  ),
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/My-poto.jpg" width={400} height={300} alt="My Photo" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Saya adalah seorang Data Support Trainer yang penuh semangat untuk
            membantu orang lain memahami dan menguasai konsep-konsep penting
            dalam bidang data. Di samping itu, saya juga seorang pemula dalam
            dunia pemrograman web, yang selalu bersemangat untuk mengeksplorasi
            kode dan membangun hal-hal baru di dunia digital. Gabungan antara
            keahlian dalam pendukung data dan tekad untuk belajar pemrograman
            web membantu saya mengintegrasikan pengetahuan dan keterampilan yang
            berharga, serta terus berkembang sebagai seorang profesional yang
            berdaya saing.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => setTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => setTab("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => setTab("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA[tab]}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
