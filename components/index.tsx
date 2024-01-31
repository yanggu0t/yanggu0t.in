import React from "react";
import Reveal from "./text-animate";
import Container from "./container";
import HoverCard from "./hover-card";
import { School } from "lucide-react";

const index = () => {
  return (
    <Container className="min-h-[80vh] px-6 py-4 sm:px-8 md:py-16 lg:px-12">
      <div className="grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1">
        <div>
          <Reveal>
            <div>
              <p className="py-2 text-3xl font-bold md:text-4xl">
                我是曾暘鈞，
              </p>
              <p className="py-2 text-lg md:text-xl ">目前是一名前端工程師</p>
              <p className="py-2 text-lg md:text-xl ">
                目前正在學習 Next.js 和 Tailwind CSS，
              </p>
            </div>
          </Reveal>
          <Reveal className="bg-[#564e63] dark:bg-[#887d9a]">
            <div className="flex py-2">
              <p className="text-lg md:text-xl">畢業於</p>
              <HoverCard
                className="text-lg md:text-xl"
                title="僑光科技大學"
                description="位於台中的私立科技大學，創立迄今50餘年，基於校訓「明誠立信」，首重品格教育，提升學生就業軟實力。"
                avatarImageUrl="https://upload.wikimedia.org/wikipedia/zh/thumb/6/62/Overseas_Chinese_University_logo.svg/1200px-Overseas_Chinese_University_logo.svg.png"
                avatarFallback="OCU"
                iconProp={<School className="mr-2 h-4 w-4 opacity-70" />}
                footerDescription="2019/09 入學 , 2023/07 畢業"
              />
              <p className="text-lg md:text-xl">的資訊科技系，</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-2">
              <span className="text-lg md:text-xl">
                目前在努力學習前端技術，但也不排斥往後端發展
              </span>
              {/* <HoverCard
                className="text-lg md:text-xl"
                title="初陽科技公司"
                description="初陽科技於2022年成立專業軟體開發團隊，提供軟體開發與系統維護服務，利用豐富經驗與技術，致力於為企業創造數位價值。"
                avatarImageUrl="https://static.104.com.tw/b_profile/cust_picture/1472/130000000201472/logo.png?v=20221104204328"
                avatarFallback="OT.co"
                iconProp={<Briefcase className="mr-2 h-4 w-4 opacity-70" />}
                footerDescription="2024 年 2 月底加入公司"
              />
              <span className="text-lg md:text-xl">
                擔任 React 前端工程師職位，
              </span> */}
            </div>
          </Reveal>
          <Reveal>
            <div className="py-2">
              <p className="text-lg md:text-xl">
                閒暇時間喜歡和會和朋友一起去台中逛街或外出，
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-2">
              <p className="text-lg md:text-xl">
                這讓我能夠在工作中保持生活的平衡與活力，
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default index;
