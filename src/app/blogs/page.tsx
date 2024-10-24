
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
  title:
    "Automobiles Insights, Car Reviews & Latest Updates | Sky Automobiles Blog",
  description:
    "Discover expert reviews, automotive tips, and the latest updates on new car launches at Sky Automobiles Blog. Stay informed with in-depth articles on car maintenance, driving tips, and the latest trends in the auto industry.",
};


const blogPosts = [
  {
    id: 1,
   
    title:
      "5 Reasons to Buy the 2024 Maruti Suzuki Swift Over Other Hatchbacks",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Swift has made a significant impact in the hatchback segment, offering a blend of style, efficiency, and advanced features. Here are five compelling reasons why you should consider the new Swift over its competitors.",
    linkCG: "/arena/swift-on-road-price-in-raipur",
    linkOD: "/arena/swift-on-road-price-in-bhubaneswar",
    blogLink:
      "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Swift-Over-Other-Hatchbacks",
  },
  {
    id: 2,
   
    title:
      "5 Reasons to Buy the 2024 Maruti Suzuki Brezza Over Other Subcompact SUVs",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Brezza has emerged as a strong contender in the subcompact SUV market, combining style, safety, and practicality. Here are five compelling reasons to choose the Brezza over its competitors.",
    linkCG: "/arena/brezza-on-road-price-in-raipur",
    linkOD: "/arena/brezza-on-road-price-in-bhubaneswar",
    blogLink:
      "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Brezza-Over-Other-Subcompact-SUVs",
  },
  {
    id: 3,
   
    title:
      "5 Reasons to Buy the 2024 Maruti Suzuki Wagon R Over Other Hatchbacks",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Wagon R continues to be a popular choice in the hatchback segment, offering a perfect blend of practicality, efficiency, and modern features. Here are five compelling reasons to consider the Wagon R over its competitors.",
    linkCG: "/arena/wagon-r-on-road-price-in-raipur",
    linkOD: "/arena/wagon-r-on-road-price-in-bhubaneswar",
    blogLink:
      "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Wagon-R-Over-Other-Hatchbacks",
  },
  {
    id: 4,
   
    title: "5 Reasons to Buy the 2024 Maruti Suzuki Grand Vitara Strong Hybrid",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Grand Vitara Strong Hybrid is making waves in the compact SUV segment, offering a unique combination of performance, efficiency, and advanced features. Here are five compelling reasons to consider this hybrid model over its competitors.",
    linkCG: "/arena/grand-vitara-on-road-price-in-raipur",
    linkOD: "/arena/grand-vitara-on-road-price-in-bhubaneswar",
    blogLink:
      "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Grand-Vitara-Strong-Hybrid",
  },
  {
    id: 5,
   
    title: "Fuel Efficiency of Grand Vitara Strong Hybrid Compared",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Grand Vitara Strong Hybrid stands out in the compact SUV segment, particularly due to its impressive fuel efficiency. Here’s how its fuel efficiency compares to other SUVs in the same category.",
    linkCG: "/nexa/grand-vitara-on-road-price-in-raipur",
    linkOD: "/nexa/grand-vitara-on-road-price-in-bhubaneswar",
    blogLink: "/blogs/Fuel-Efficiency-of-Grand-Vitara-Strong-Hybrid-Compared",
  },
  {
    id: 6,
   
    title: "5 Reasons to Buy the 2024 Maruti Suzuki Alto K10",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Alto K10 is a standout choice in the entry-level hatchback segment, appealing to first-time car buyers and urban commuters alike. Here are five compelling reasons to consider the Alto K10 for your next vehicle.",
    linkCG: "/arena/alto-k10-on-road-price-in-raipur",
    linkOD: "/arena/alto-k10-on-road-price-in-bhubaneswar",
    blogLink: "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Alto-K10",
  },
  {
    id: 7,
   
    title: "5 Reasons to Buy the 2024 Maruti Suzuki Celerio",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Celerio is a compact hatchback that has garnered attention for its blend of efficiency, comfort, and modern features. Here are five compelling reasons to consider the Celerio for your next vehicle purchase.",
    linkCG: "/arena/celerio-on-road-price-in-raipur",
    linkOD: "/arena/celerio-on-road-price-in-bhubaneswar",
    blogLink: "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Celerio",
  },
  {
    id: 8,
   
    title: "5 Reasons to Buy the 2024 Maruti Suzuki Fronx",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Fronx has emerged as a compelling choice in the compact SUV segment, combining modern design, efficiency, and advanced features. Here are five reasons why the Fronx deserves your attention.",
    linkCG: "/nexa/fronx-on-road-price-in-raipur",
    linkOD: "/nexa/fronx-on-road-price-in-bhubaneswar",
    blogLink: "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Fronx",
  },
  {
    id: 9,
   
    title: "5 Reasons to Buy the 2024 Maruti Suzuki Baleno",
    author: "Sky Automobiles",
    excerpt:
      "The 2024 Maruti Suzuki Baleno continues to be a popular choice in the premium hatchback segment, offering a blend of style, performance, and advanced features. Here are five compelling reasons to consider the Baleno for your next vehicle purchase.",
    linkCG: "/nexa/baleno-on-road-price-in-raipur",
    linkOD: "/nexa/baleno-on-road-price-in-bhubaneswar",
    blogLink: "/blogs/5-Reasons-to-Buy-the-2024-Maruti-Suzuki-Baleno",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <div className=" bg-primaryGray min-h-20 ">
        <Image
          src="/images/other/Ignis_Radiance_Edition_banner.webp"
          alt="banner"
          className="w-full object-cover  object-bottom"
          width={1920}
          height={500}
        />
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-24 px-2">
        <h1 className="text-3xl font-bold mb-8">
          {" "}
          Check the Latest Blog Posts on Automobiles News
        </h1>
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 lg:gap-y-6 ">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border rounded-lg px-4 py-6 hover:shadow-2xl hover:bg-primaryBlue hover:text-white group flex justify-between flex-col"
            >
              <div className="">
                <time
                  dateTime={new Date().toDateString()}
                  className="text-sm "
                ></time>
                <h4
                  title={post.title}
                  className="font-medium text-xl min-h-4 mb-2 "
                >
                  {post.title}
                </h4>
              </div>
              <div className="">
                {" "}
                <p className="text-sm ">
                  Published by: <span className="italic">{post.author}</span>{" "}
                </p>
                <h5
                  className="min-h-4 mb-1 mt-2 line-clamp-5 text-sm "
                  title={post.excerpt}
                >
                  {post.excerpt}
                </h5>
                {/* <button className="text-primaryBlue group-hover:text-white mb-2    text-sm ">
                  Read More...
                </button> */}
                <div className="flex justify-between gap-2 mt-4">
                  <Link href={post.blogLink} className="w-1/2 text-sm">
                    <button className="text-primaryBlue group-hover:bg-white group-hover:text-primaryBlue  border px-4 py-1.5 rounded w-full text-sm ">
                      Read More
                    </button>
                  </Link>
                  <Link href={post.linkCG} className="w-1/2 text-sm">
                    {" "}
                    <button className="text-primaryBlue group-hover:text-white  border px-4 py-1.5 rounded w-full ">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
