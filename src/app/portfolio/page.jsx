"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Real Estate MarketPlace",
    desc: "I make these real estate marketplace in MERN STACK and Tailwind CSS ,where u can buy ,rent or sell your property.",
    img: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://zack-property.onrender.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Standex Traders made with NEXT JS",
    desc: "I made these project for my client ,this is a US based company which deals in selling and buying used goods, shoes ,clothes and many more ",
    img: "/st.png",
    link: "https://www.standextraders.com",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Twitter Clone",
    desc: "I make these Twitter Clone with Tailwind CSS ,this is great project which helps me in learning desiging.",
    img: "https://images.pexels.com/photos/13240226/pexels-photo-13240226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://twitter-clone-b133e.web.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Text Converter",
    desc: "It is TextModo app make with react ,through which u can convert your text and count your text.",
    img: "/textmodo.png",
    link: "https://the-text-modo.web.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold text-black">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                 
                </div>
                <Link href={item.link} target="_blank" className="mx-32">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-red-400 hover:text-white font-semibold m-4  rounded">See Demo</button>
                  </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl mt-20">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack MERN & NEXT JS Developer 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
