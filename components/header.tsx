import React from "react";
import Container from "./container";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";
import Reveal from "./text-animate";
import SocialLink from "./social-nav";
const Header = () => {
  return (
    <>
      <Container className="py py max-h-[20vh] px-6 py-8 sm:px-8 md:py-16 lg:px-12">
        <div className="flex items-center justify-between">
          <Reveal>
            <Link
              href="/"
              className="cursor-pointer font-pixel text-3xl hover:font-bold hover:text-[#3b3544]/80 dark:hover:text-[#e8e2f1] md:text-5xl"
            >
              Yanggu0t
            </Link>
          </Reveal>
          <Reveal>
            <div className="flex items-center text-lg">
              <div className="hidden">
                <span>繁</span>
                <span className="mx-2">/</span>
                <Link href="/" className="mr-4">
                  Eng
                </Link>
              </div>
              <ThemeSwitcher className="" />
            </div>
          </Reveal>
        </div>
        <Reveal>
          <SocialLink className="mt-4" />
        </Reveal>
      </Container>
    </>
  );
};

export default Header;
