'use client';
import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import { models } from '@/constants';
import { useAppContext } from '@/context';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

const Offers = () => {
  // State to handle search input
  const [searchQuery, setSearchQuery] = useState('');
  const { selectedState } = useAppContext();

  // Filtered data based on search input
  const filteredAndSortedData = models
    ?.filter(
      (vehicle) =>
        (vehicle.offersAmount as number) > 0 &&
        (vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vehicle.offersAmount.toString().includes(searchQuery))
    )
    .sort((a, b) => (b.offersAmount as number) - (a.offersAmount as number));

  // --- Dynamic last day of the month ---
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastDay = new Date(year, month + 1, 0); // 0 = last day of previous month
  const day = lastDay.getDate();
  const monthName = lastDay.toLocaleString('default', { month: 'short' });
  const formattedDate = `${day}${getDaySuffix(day)} of ${monthName} ${year}`;

  function getDaySuffix(day: number) {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <div className='min-h-40 bg-primaryGray'>
          <Image
            height={1080}
            width={1920}
            src='/images/other/offers_banner.webp'
            alt='Sky Automobiles Offers Banner'
            className='object-cover w-full h-full max-h-[50vh] hidden sm:block'
          />
          <Image
            height={1920}
            width={500}
            src='/images/other/offer_mobile.webp'
            alt='Sky Automobiles Offers Banner'
            className='object-cover w-full h-full min-h-[50vh] sm:hidden'
          />
        </div>
        <div className='container py-16 mx-auto xl:max-w-7xl lg:py-20'>
          <h4 className='text-3xl font-bold text-primaryGray mb-3 text-center'>
            Maruti Suzuki{' '}
            <span
              className={`${
                selectedState === 'Odisha'
                  ? 'text-primaryBlue'
                  : 'text-primaryRed'
              }`}
            >
              Offers
            </span>{' '}
            2025
          </h4>
          <p className='text-primaryGray text-center md:mb-3'>
            Discover unbeatable deals on Maruti Suzuki Arena & Nexa models.
            Hurry, these offers won&apos;t last long! Get them now before the
            end of Offer.
          </p>

          {/* Search Bar */}
          <div className='flex justify-center mb-2'>
            <div className='relative mx-auto w-full max-w-xl'>
              <input
                type='text'
                placeholder='Search by name or offer amount...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full max-w-lg pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-center ${
                  selectedState === 'Odisha'
                    ? 'focus:border-primaryBlue'
                    : 'focus:border-primaryRed'
                }`}
              />
              <IoSearch className='absolute top-1/3 left-2' />
            </div>
          </div>

          {/* Offers Grid */}
          <div className='grid grid-cols-1 gap-4 py-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredAndSortedData?.length > 0 ? (
              filteredAndSortedData.map((offer, i) => (
                <div
                  key={i}
                  className='py-4 overflow-hidden border shadow-lg rounded-lg bg-gray-50 group lg:p-5 flex flex-col justify-between relative max-w-96 mx-auto'
                >
                  <div className='flex flex-col justify-center items-center h-full bg-secondaryGray4 rounded-xl'>
                    <Link
                      href={
                        selectedState === 'Odisha' ? offer.linkOD : offer.linkCG
                      }
                    >
                      <img
                        src={offer.colors[0]?.img}
                        alt={offer.name}
                        className='object-cover w-full duration-200 scale-90 md:hover:scale-100 max-h-64 my-auto'
                      />
                    </Link>
                  </div>
                  <div className='border-t'>
                    <div className='px-6 py-4 text-center mb-1'>
                      <p className='text-xl font-medium text-primary'>
                        {offer.name}
                      </p>
                      <p
                        className={`text-xl font-bold ${
                          selectedState === 'Odisha'
                            ? 'text-primaryBlue'
                            : 'text-primaryRed'
                        }`}
                      >
                        <span className='text-sm font-medium text-gray-900'>
                          Save upto
                        </span>{' '}
                        ₹{' '}
                        <span className='font-medium'>
                          {isNaN(offer.offersAmount as number)
                            ? '0'
                            : (offer.offersAmount as number).toLocaleString(
                                'en-IN'
                              )}
                        </span>
                        <span className='font-bold'>*</span>
                      </p>
                      <p className='text-sm mb-2'>
                        {offer.offersAdditionalDec}
                      </p>
                      <p className='flex gap-1 mt-1 text-xs xl:text-sm justify-center'>
                        <FaRegCalendarCheck />
                        <span>Valid Till: {formattedDate}</span>
                      </p>
                    </div>
                    <div className='flex items-center justify-center gap-4 pb-2 mx-4'>
                      <Link
                        href={
                          selectedState === 'Odisha'
                            ? offer.linkOD
                            : offer.linkCG
                        }
                        className={`w-full p-1.5 text-sm text-center uppercase border rounded-lg hover:text-white group-hover:text-white  ${
                          selectedState === 'Odisha'
                            ? 'group-hover:bg-primaryBlue border-primaryBlue'
                            : 'group-hover:bg-primaryRed border-primaryRed '
                        }`}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center text-gray-500 lg:col-span-3 xl:col-span-4'>
                No offers found matching your search criteria.
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          {filteredAndSortedData?.length > 0 && (
            <p className='pt-1 text-sm cont'>
              Terms and Conditions Apply. These offers are valid till{' '}
              {formattedDate}. Above offers include consumer, exchange,
              institutional, and rural offers.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
