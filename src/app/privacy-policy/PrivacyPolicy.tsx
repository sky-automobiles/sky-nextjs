"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const PrivacyPolicy = () => {
  const { selectedState } = useAppContext();
  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
       
        {/* <div className="pt-20 min-h-40 bg-primaryGray">
          <img
            src="/images/other/sky-automobile-book-now-banner.jpg"
            alt="Service Banner"
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          />
        </div> */}
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Privacy{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Policy{" "}
            </span>{" "}
          </h4>

          <div className="my-4 space-y-1">
            <h5>Sky Automobiles Maruti Suzuki Statement of Privacy</h5>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              At Sky Automobiles we take your privacy seriously. Please read the
              following to learn more about our terms and conditions.
            </p>
          </div>

          <div className="my-4 space-y-1">
            <div className="flex">
              <RiArrowRightSLine className="text-red-600" size={23} />
              <p className="text-sm font-light">
                This covers Sky Automobiles Maruti Suzuki treatment of personally
                identifiable information that Sky Automobiles Maruti Suzuki collects
                when you are on Sky Automobiles Maruti Suzuki site and when you use
                our services. This policy also covers Sky Automobiles Maruti Suzuki
                treatment of any Personally identifiable information that Sky Automobile Maruti Suzuki shares with you.
              </p>
            </div>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              This policy does not apply to the practices of companies that
              Sky Automobiles Maruti Suzuki does not own or control or Sky Automobiles
              Maruti Suzuki does not own or employ or manage.
            </p>
            <br></br>
            <p className="flex items-center text-sm font-light">
              I, hereby authorize Sky Automobiles Maruti Suzuki, to contact me. It will
              override my registry on the NCPR. By providing your contact
              details you have expressly authorized Sky Autombolies to contact you in
              future through calls /SMS / E-mails and inform you about our
              products.
            </p>
          </div>

          <div className="my-4 space-y-1">
            <h5>Information Collection and Use</h5>
            <div className="flex">
              <RiArrowRightSLine className="text-red-600" size={22} />
              <p className="text-sm font-light">
                Sky Automobiles Maruti Suzuki collects personally identifiable
                information when you register for a Sky Automobiles Maruti Suzuki
                account. When you choose the services and promotions. Sky Automobiles
                Maruti Suzuki may also receive personally identifiable
                information from our business partners.
              </p>
            </div>
            <div className="flex">
              <RiArrowRightSLine className="text-red-600" size={22} />
              <p className="text-sm font-light">
                When you register with Sky Automobiles Maruti Suzuki, we ask for your
                name, e-mail address, birth date, gender, occupation, industry
                and personal interest. Once you register with Sky Automobiles Maruti
                Suzuki and sign in to our services, you are not anonymous to us.
              </p>
            </div>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              Sky Automobiles Maruti Suzuki uses information for three general
              purpose: to fulfill your requests for certain products and
              services and to contact you about specials and new products.
            </p>
          </div>

          <div className="my-4 space-y-1">
            <h5>Information Sharing and Disclosure</h5>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              Sky Automobiles Maruti Suzuki will not sell or rent your Personally
              Identifiable Information to anyone.
            </p>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              Sky Automobiles Maruti Suzuki will send Personally Identifiable
              Information about you when:
            </p>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              We have consent to share the information
            </p>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              We need to share your information to provide the product or
              service you have requested
            </p>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              We respond to subpoenas, court orders or legal process.
            </p>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              When we find your action on the web site violates the Sky Automobiles
              Maruti Suzuki terms and condition or any of your usage guidelines
              for specific products or services.
            </p>
          </div>

          <div className="my-4 space-y-1">
            <h5>Security</h5>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              Your Sky Automobiles Maruti Suzuki account information is
              password-protected for your privacy and security We have taken
              adequate measures to secure access to your personal data
            </p>
          </div>
          <div className="my-4 space-y-1">
            <h5>Changes to this Policy</h5>
            <p className="flex items-center text-sm font-light">
              <RiArrowRightSLine className="text-red-600" />
              Sky Automobiles Maruti Suzuki may edit this policy from time to time. If
              we make any substantial changes ,we will notify you by posting a
              prominent announcement on our pages.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
