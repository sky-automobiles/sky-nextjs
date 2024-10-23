"use client";

import Link from "next/link";
import React from "react";

import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { useAppContext } from "@/context";

const NavigationLinks: React.FC<{
  title: string;
  links: { label: string; href: string; hrefOD?: string }[];
  selectedState: string;
}> = ({ title, links, selectedState }) => (
  <div>
    <p
      className={`font-medium ${
        selectedState === "Odisha" ? "text-white" : "text-primaryRed"
      }`}
    >
      {title}
    </p>
    <nav className="flex flex-col mt-4 space-y-2 text-sm text-secondaryGray4">
      {links.map((link) => (
        <Link
          key={link.label}
          className={`hover:opacity-75 ${
            selectedState === "Odisha"
              ? "hover:text-white hover:font-medium"
              : "hover:text-primaryRed"
          }`}
          href={`${
            selectedState === "Odisha" && link.hrefOD
              ? link.href
              : selectedState !== "Odisha" && link.hrefOD
              ? link.hrefOD
              : link.href
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

NavigationLinks.displayName = "NavigationLinks";

const Footer: React.FC = () => {
  const { selectedState } = useAppContext();

  return (
    <div className="bg-primaryGray">
      <footer className="container px-2 py-10 mx-auto xl:max-w-7xl lg:pt-16">
        <div className="max-w-screen-xl px-4 pt-10 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="/images/other/logo-white.png"
                className="h-14 mx-auto md:mx-0 md:-ml-4"
                alt="logo"
              />
              <p className="md:max-w-xs mt-4 text-sm text-secondaryGray4 text-center md:text-left">
                Sky Automobiles India Pvt. Ltd. is an Indian automobile dealer
                company.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-white md:justify-start lg:text-lg">
                {" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100057528455659"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/sky.automobiles/">
                  {" "}
                  <LuInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/skyautomobiles/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="grid gap-8 lg:col-span-2 grid-cols-2 lg:grid-cols-4">
              <NavigationLinks
                title="Arena"
                selectedState={selectedState}
                links={[
                  {
                    label: "Alto K10",
                    href: "/arena/alto-k10-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/alto-k10-on-road-price-in-raipur",
                  },
                  {
                    label: "Swift",
                    href: "/arena/swift-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/swift-on-road-price-in-raipur",
                  },
                  {
                    label: "Brezza",
                    href: "/arena/brezza-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/brezza-on-road-price-in-raipur",
                  },
                  {
                    label: "Dzire",
                    href: "/arena/dzire-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/dzire-on-road-price-in-raipur",
                  },
                  {
                    label: "S-Presso",
                    href: "/arena/spresso-on-road-price-in-bhubaneswar",
                    hrefOD: "",
                  },
                  {
                    label: "Wagon R",
                    href: "/arena/wagon-r-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/wagon-r-on-road-price-in-raipur",
                  },
                  {
                    label: "Ertiga",
                    href: "/arena/ertiga-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/ertiga-on-road-price-in-raipur",
                  },
                  {
                    label: "Celerio",
                    href: "/arena/celerio-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/celerio-on-road-price-in-raipur",
                  },
                  {
                    label: "Eeco",
                    href: "/arena/eeco-on-road-price-in-bhubaneswar",
                    hrefOD: "/arena/eeco-on-road-price-in-raipur",
                  },
                ]}
              />
              <NavigationLinks
                title="Nexa"
                selectedState={selectedState}
                links={[
                  {
                    label: "Invicto",
                    href: "/nexa/invicto-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/invicto-on-road-price-in-raipur",
                  },
                  {
                    label: "Jimny",
                    href: "/nexa/jimny-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/jimny-on-road-price-in-raipur",
                  },
                  {
                    label: "Fronx",
                    href: "/nexa/fronx-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/fronx-on-road-price-in-raipur",
                  },
                  {
                    label: "Grand Vitara",
                    href: "/nexa/grand-vitara-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/grand-vitara-on-road-price-in-raipur",
                  },
                  {
                    label: "XL6",
                    href: "/nexa/xl6-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/xl6-on-road-price-in-raipur",
                  },
                  {
                    label: "Ciaz",
                    href: "/nexa/ciaz-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/ciaz-on-road-price-in-raipur",
                  },
                  {
                    label: "Baleno",
                    href: "/nexa/baleno-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/baleno-on-road-price-in-raipur",
                  },
                  {
                    label: "Ignis",
                    href: "/nexa/ignis-on-road-price-in-bhubaneswar",
                    hrefOD: "/nexa/ignis-on-road-price-in-raipur",
                  },
                ]}
              />
              <NavigationLinks
                title="Helpful Links"
                selectedState={selectedState}
                links={[
                  // { label: "Buy a Car", href: "/truevalue/buy-a-car" },
                  { label: "Sell Your Car", href: "/truevalue/sell-a-car" },
                  { label: "Offers", href: "/offers" },
                  {
                    label: "Chhattisgarh Outlets",
                    href: "/outlets/chhattisgarh-outlets",
                  },
                  { label: "Odisha Outlets", href: "/outlets/odisa-outlets" },
                ]}
              />{" "}
              <NavigationLinks
                title="Others"
                selectedState={selectedState}
                links={[
                  { label: "Book a Service", href: "/services/book-a-service" },
                  { label: "Finance", href: "/services/finance" },
                  { label: "Insurance", href: "/services/insurance" },

                  { label: "About Us", href: "/about-us" },
                  { label: "Contact Us", href: "/contact-us" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Career", href: "/career" },
                  { label: "Privacy Policy", href: "/privacy-policy" },

                  // { label: "Returns Policy", href: "/" },
                  // { label: "Accessibility", href: "/" },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-secondaryGray2 md:flex-row text-secondaryGray3 lg:pt-4">
            <p className="text-xs">
              © 2024 Sky Automobiles All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-xs lg:gap-4">
              Powered by
              <a
                href="https://www.broaddcast.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src="https://www.broaddcast.com/assets/images/logo-white.svg"
                  alt="Broaddcast"
                  className="h-8 -ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.displayName = "Footer";

export default Footer;
