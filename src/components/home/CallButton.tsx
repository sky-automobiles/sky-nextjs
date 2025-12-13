'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdLocalOffer, MdLocationOn } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { PiSteeringWheelBold } from 'react-icons/pi';
import { useAppContext } from '@/context';
import ModalTestDrive from './ModalTestDrive';

const Callbutton: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [showTestDrive, setShowTestDrive] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);
  const { selectedState } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryColor =
    selectedState === 'Odisha' ? 'text-primaryBlue' : 'text-primaryRed';

  return (
    <>
      <div
        className={`fixed bottom-0 z-20 w-full bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden rounded-t-2xl transition-transform duration-300 ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className='grid grid-cols-4 py-3'>
          {/* TEST DRIVE (BUTTON – NOT LINK) */}
          <button
            onClick={() => setShowTestDrive(true)}
            className='flex flex-col items-center gap-1'
          >
            <PiSteeringWheelBold
              className={`text-2xl transition ${primaryColor}`}
            />
            <span className='text-[11px] font-medium'>Test Drive</span>
          </button>

          {/* OUTLETS */}
          <Link
            href={
              selectedState === 'Odisha'
                ? '/outlets/odisha-outlets'
                : '/outlets/chhattisgarh-outlets'
            }
          >
            <div className='flex flex-col items-center gap-1'>
              <MdLocationOn className={`text-2xl transition ${primaryColor}`}/>
              <span className='text-[11px] font-medium'>Outlets</span>
            </div>
          </Link>

          {/* SERVICE */}
          <Link
            href={
              selectedState === 'Odisha'
                ? '/services/book-a-service'
                : '/services/book-a-service'
            }
          >
            <div className='flex flex-col items-center gap-1'>
              <GiAutoRepair className={`text-2xl transition ${primaryColor}`} />
              <span className='text-[11px] font-medium'>Service</span>
            </div>
          </Link>

          {/* OFFERS */}
          <Link href={selectedState === 'Odisha' ? '/offers' : '/offers'}>
            <div className='flex flex-col items-center gap-1'>
              <MdLocalOffer className={`text-2xl transition ${primaryColor}`} />
              <span className='text-[11px] font-medium'>Offers</span>
            </div>
          </Link>
        </div>
      </div>

      {/* TEST DRIVE MODAL */}
      <ModalTestDrive
        showTestDrive={showTestDrive}
        setShowTestDrive={setShowTestDrive}
      />
    </>
  );
};

export default Callbutton;
