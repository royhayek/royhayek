"use client";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import mob1 from "../../public/mob1.png";
import mob2 from "../../public/mob2.png";
import mob3 from "../../public/mob3.png";
import mob4 from "../../public/mob4.png";
import mob5 from "../../public/mob5.png";
import mob6 from "../../public/mob6.png";
import mob7 from "../../public/mob7.png";
import avatar from "../../public/avatar.jpeg";

export default function Home() {
  const handleImageClick = (website) => {
    window.open(website, "_blank");
  };

  const portfolio = [
    {
      alt: "Aljazira Tadawul",
      src: web1,
      title: "Aljazira Tadawul",
      description:
        "A stock trading website developed with React for Aljazira Capital, KSA, featuring real-time market data, interactive charts, and secure trading functionalities to enhance the user experience and facilitate seamless transactions",
      website: "https://www.aljaziratadawul.com/",
    },
    {
      alt: "Aljazira Tadawul",
      src: mob7,
      title: "Aljazira Tadawul",
      description:
        "A stock trading app created with React Native for Aljazira Capital, KSA, offering a user-friendly interface, real-time stock updates, and advanced trading tools, designed for on-the-go access and efficient portfolio management.",
      website: "https://apps.apple.com/qa/app/aljazira-capital/id6445973979",
    },
    {
      alt: "CMS for Avandra",
      src: web2,
      title: "CMS for Avandra",
      description:
        "I developed a CMS for the Avandra AI Trip Planner, enabling seamless analytics, content management, and modification. The system allows for real-time updates, user engagement tracking, and efficient management of travel preferences and destination content.",
      website: "https://avandraapp.com/cms",
    },
    {
      alt: "Avandra: AI Trip Planner",
      src: mob2,
      title: "Avandra: AI Trip Planner",
      description:
        "Avandra is one of my personal projects built with React Native. It simplifies travel planning by using AI to create a complete itinerary for your desired destination.",
      website: "https://apps.apple.com/us/app/avandra-ai-trip-planner/id6502790120",
    },
    {
      alt: "Hello Curious",
      src: mob1,
      title: "Hello Curious",
      description:
        "Hello Curious was one of my freelance projects built using React Native. It allows people to discover and unlock experiences they can enjoy alone or with family and friends.",
      website: "https://apps.apple.com/us/app/hello-curious/id1642046057",
    },
    {
      alt: "Roadster Diner",
      src: mob3,
      title: "Roadster Diner",
      description:
        "I had the opportunity to work on the Roadster Diner app using React Native, focusing particularly on the loyalty feature, spinning wheel, and wallet-based bill payment.",
      website: "https://apps.apple.com/lb/app/roadster-diner/id1350373136/",
    },
    {
      alt: "Deek Duke",
      src: mob4,
      title: "Deek Duke",
      description:
        "I had the opportunity to work on the Deek Duke app using React Native, focusing particularly on the wallet-based bill payment, coupon system, and loyalty feature.",
      website: "https://apps.apple.com/lb/app/deek-duke-go/id1205636562",
    },
    {
      alt: "Bartartine",
      src: mob5,
      title: "Bartartine",
      description:
        "I had the opportunity to work on the Bartartine app using React Native, focusing particularly on the loyalty feature, wallet-based bill payment, bug fixes, and performance improvements.",
      website: "https://apps.apple.com/lb/app/bartartine/id1534420141",
    },
    {
      alt: "Zaatar w Zeit",
      src: mob6,
      title: "Zaatar w Zeit",
      description:
        "I had the opportunity to work on the Zaatar w Zeit app (LB & KSA) using React Native, focusing particularly on the wallet-based bill payment, bug fixes, and performance improvements.",
      website: "https://apps.apple.com/lb/app/zaatar-w-zeit/id1166494577?platform=iphone",
    },
  ];

  return (
    <main>
      <section className="min-h-screen">
        <div className="text-center p-10 py-10 flex flex-col items-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">Roy el Hayek</h2>
          <h3 className="text-2xl py-2  dark:text-white">Frontend Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 w-1/2">
            Frontend Developer specializing in mobile and web solutions with React and React Native, bringing over 4
            years of experience
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          {/* <AiFillTwitterCircle /> */}
          <AiFillLinkedin
            className="cursor-pointer"
            onClick={() => window.open("https://www.linkedin.com/in/roy-el-hayek-74979b152/", "_blank")}
          />
          {/* <AiFillFacebook /> */}
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 to-white rounded-full w-80 h-80 mt-10 overflow-hidden">
          <Image src={avatar} alt="deved" layout="fill" objectFit="cover" />
        </div>
      </section>

      {/* <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a freelance designer and developer, I've done remote work for
            <span className="text-teal-500"> agencies </span>
            consulted for <span className="text-teal-500">startups </span>
            and collaborated with talanted people to create digital products for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design, programming and teaching.
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">Beautiful Designs</h3>
            <p className="py-2">Creating elegant designs suited for your needs following core design theory.</p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Code your dream project</h3>
            <p className="py-2">Do you have an idea for your next great website? Let's make it a reality.</p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
        </div>
      </section> */}

      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
          <p className="text-md py-2 text-gray-800 dark:text-gray-200">
            Since the beginning of my freelance career, I have primarily built portfolio projects using React and React
            Native. Although some projects were developed using Flutter or other technologies, they are not listed here.
            I've worked remotely for companies and as a freelancer, as well as on-site in Lebanon and KSA, collaborating
            with talented individuals to create innovative digital products for both business and consumer use.
          </p>
          <p className="text-md py-2 text-gray-800 dark:text-gray-200">Explore a sample of my work below.</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {portfolio.map((item, index) => (
            <div key={index} onClick={() => handleImageClick(item.website)} className="basis-1/3 flex-1 cursor-pointer">
              <Image
                className="object-cover rounded-xl border-1.5"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={item.src}
                alt={item.alt}
              />
              <div className="p-4">
                <p className="text-lg font-semibold dark:text-white">{item.title}</p>
                <p className="text-gray-600 mt-2 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="basis-1/3 flex-1"></div>
        </div>
      </section>
    </main>
  );
}
