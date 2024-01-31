import React from "react";
import Reveal from "./text-animate";
import Image from "next/image";
import SocialLink from "./social-nav";

const Footer = () => {
  return (
    <>
      <div className=" flex bg-[#f2f0f4] dark:bg-[#3a3740]">
        <div className="mx-auto my-20 max-w-7xl">
          <div className="relative flex max-w-2xl flex-col items-center gap-8 rounded-3xl bg-white/5 px-6 py-16 ring-1 ring-black/10 dark:ring-white/10 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:px-20">
            <Image
              src="https://i.imgur.com/2XMPws2.jpeg"
              className="my-4 rounded-full md:mx-4 xl:mx-6"
              alt="avatar"
              width={150}
              height={150}
            />
            <div className="flex w-[306px] flex-auto flex-col items-center justify-center md:w-[450px] lg:block lg:w-[550px] lg:flex-none lg:items-stretch">
              <Reveal>
                <h1 className="mb-8 items-center text-2xl font-semibold lg:text-3xl">
                  關於作者
                </h1>
              </Reveal>
              <Reveal>
                <p className="font-regular mx-auto text-lg lg:text-xl">
                  我是曾暘鈞，畢業於僑光科技大學資訊科技系，目前在任職於初陽科技擔任前端工程師，有任何需要可以聯繫我。
                </p>
              </Reveal>
              <Reveal>
                <SocialLink className="mt-12 md:mb-8 lg:mb-4" />
              </Reveal>
              <div className="absolute bottom-0 right-auto font-pixel lg:bottom-2 lg:right-4">
                © {new Date().getFullYear()} Yanggu0t. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
