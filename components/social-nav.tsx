import React from "react";
import { Github, Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
const SocialLink = ({ className }: { className?: string }) => {
  return (
    <>
      <nav className={cn("", className)}>
        <ul className="flex gap-2">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yanggu0t/"
            >
              <Github className="h-6 w-6 duration-100 hover:text-[#8878a0]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/yanggu0t/"
            >
              <Facebook className="h-6 w-6 duration-100 hover:text-[#8878a0]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/yanggu0t"
            >
              <Instagram className="mr-1 h-6 w-6 duration-100 hover:text-[#8878a0]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yanggu0t/"
            >
              <Linkedin className="mr-1 h-6 w-6 duration-100 hover:text-[#8878a0]" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:zxc225751@gmail.com"
            >
              <Mail className="h-6 w-6 duration-100 hover:text-[#8878a0]" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SocialLink;
