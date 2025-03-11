"use client";
import React, { useState } from "react";
import Image from "next/image";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import InstagramIcon from "@/public/instagram-icon.svg";
import WhatsappIcon from "@/public/whatsapp-icon.svg";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Your existing code here */}
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/IMAMFAJAR29">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/imam-fajar">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="https://instagram.com/imfxzr?igshid=ZDdkNTZiNTM=">
          <Image src={InstagramIcon} alt="Instagram Icon" />
        </Link>
        <Link href="https://wa.me/6281210619134">
          <Image src={WhatsappIcon} alt="Whatsapp Icon" />
        </Link>
      </div>
      {/* Your existing code here */}
    </section>
  );
};

export default EmailSection;
