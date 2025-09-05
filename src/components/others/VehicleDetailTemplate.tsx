'use client';

import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import VehicleDetailsSlider from '@/components/others/VehicleDetailsSlider';
import { cgOutlets, models, odOutlets } from '@/constants';
import { useAppContext } from '@/context';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsFuelPump } from 'react-icons/bs';
import { GiSpeedometer } from 'react-icons/gi';
import { PiEngine } from 'react-icons/pi';
import ModalTestDrive from '../home/ModalTestDrive';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FaSpinner } from 'react-icons/fa';

interface FormData {
  name: string;
  phone: string;
  email: string;
  outlet: string;
  variant: string;
}
interface VehiceProps {
  index: number;
}

const VehicleDetailTemplate: React.FC<VehiceProps> = ({ index }) => {
  const { selectedState } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  const data = models[index];
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    outlet: '',
    variant: data?.variants[0]?.variant || '',
  });
  const [selected, setSelected] = useState('Exterior');
  const [loading, setLoading] = useState(false);
  const [showTestDrive, setShowTestDrive] = useState(false);

  const handleClickColor = (index: number): void => {
    setSelectedColor(index);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    console.log('Form Data:', {
      ...formData,
      state: selectedState,
      model: data.subName,
    });
    let modelName = data.subName;
    try {
      // Send the POST request
      const response = await fetch('/api/on-road-price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          state: selectedState,
          model: modelName,
          channel: index > 8 ? 'Nexa' : 'Arena',
        }),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle the response based on the data
      if (data.status === true) {
        toast.success(
          'Thank you for contacting us. We will get back to you soon!'
        );
        //  window.location.href = "/thank-you";
        router.push('/thank-you');
      } else {
        toast.error('Failed to send request. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send request. Please try again later.');
      console.error('Error sending request:', error);
    }
    setFormData({
      name: '',
      phone: '',
      email: '',
      outlet: '',
      variant: data?.variants[0]?.variant || '',
    });
    // const formElement = document.getElementById("myForm") as HTMLFormElement;
    // if (formElement) {
    //   formElement.reset();
    // }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedState !== 'Chhattisgarh' && pathname !== data?.linkOD) {
      // window.location.href = "/outlets/odisha-outlets";
      router.push(data?.linkOD);
      // console.log(pathname)
    } else if (selectedState !== 'Odisha' && pathname !== data?.linkCG) {
      // window.location.href = "/outlets/chhattisgarh-outlets";
      router.push(data?.linkCG);
      // console.log(pathname)
    }
  }, [selectedState]);

  if (!data) return null;

  return (
    <div className=''>
      <Header />
      {/* Hero Section */}
      <section id='car-hero-section'>
        <div className='px-1 py-28 bg-primaryGray lg:py-20 min-h-[80vh] flex flex-col justify-center'>
          <div className='container grid items-center mx-auto text-white md:grid-cols-2 xl:max-w-7xl'>
            <div>
              <h1 className='mb-4 text-3xl font-bold lg:text-4xl'>
                {data?.name}
              </h1>
              <p>Ex-Showroom Price</p>
              <h3 className='mb-6 text-2xl font-medium'>{data?.priceRange}</h3>
              <div className='grid grid-cols-2 gap-3 mb-6 md:grid-cols-3 lg:gap-0'>
                {data?.carDetails.map((detail, index) => (
                  <div key={index} className='flex items-center gap-4'>
                    {index === 0 ? (
                      <div>
                        <GiSpeedometer className='text-4xl' />
                      </div>
                    ) : index === 1 ? (
                      <div>
                        <BsFuelPump className='text-4xl' />
                      </div>
                    ) : (
                      <div>
                        <PiEngine className='text-4xl' />
                      </div>
                    )}
                    {/* {detail.icon} */}
                    <div>
                      <span className='font-semibold'>{detail.label}</span>
                      <br />
                      <span>{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-wrap gap-2 mb-6 lg:gap-4'>
                <a
                  href={data?.brochure}
                  target='_blank'
                  aria-label='View Brochure'
                  rel='noopener noreferrer'
                >
                  <button
                    aria-label='View Brochure'
                    className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg   ${
                      selectedState === 'Odisha'
                        ? 'hover:bg-primaryBlue'
                        : 'hover:bg-primaryRed '
                    }`}
                  >
                    View Brochure
                  </button>
                </a>

                <a
                  href='#enq-form'
                  aria-label='  Get On Road Price'
                  className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg   ${
                    selectedState === 'Odisha'
                      ? 'hover:bg-primaryBlue'
                      : 'hover:bg-primaryRed '
                  }`}
                >
                  Get On Road Price
                </a>
                <button
                  aria-label=' Book Test Drive'
                  onClick={() => setShowTestDrive(true)}
                  className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg   ${
                    selectedState === 'Odisha'
                      ? 'hover:bg-primaryBlue'
                      : 'hover:bg-primaryRed '
                  }`}
                >
                  Book Test Drive
                </button>
              </div>
              <p className='mb-4 text-sm'>
                Our professional and well-trained staff is ready to assist you.
              </p>
            </div>
            <div>
              <img
                src={data?.colors[selectedColor].img}
                alt={data?.colors[selectedColor].colName}
              />
              <h5 className='mb-5 text-xl font-medium text-center'>
                {data?.colors[selectedColor].colName}
              </h5>
              <div className='flex flex-wrap justify-center gap-3'>
                {data?.colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => handleClickColor(index)}
                    className={`w-6 h-6 rounded-full cursor-pointer border flex justify-center items-center ${
                      selectedColor === index &&
                      'shadow shadow-gray-500 border-2 animate-bounce'
                    }`}
                    style={{ backgroundColor: color.colorCode }}
                  >
                    {selectedColor === index && <p>&#10003;</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enquiry Form */}
      <section id='car-enq-section'>
        <div
          id='enq-form'
          className='container mx-auto xl:max-w-7xl bg-white py-10 lg:pt-20'
        >
          <h4 className='sm:text-3xl font-bold text-primaryGray lg:mb-6 text-2xl'>
            Book your{' '}
            <span
              className={` ${
                selectedState === 'Odisha'
                  ? 'text-primaryBlue'
                  : 'text-primaryRed'
              }`}
            >
              {data?.subName}
            </span>{' '}
            Now
          </h4>
          <form onSubmit={handleSubmit} id='myForm' className='py-3 bg-white '>
            <div className=' w-full gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
              <input
                type='text'
                name='name'
                placeholder='Name*'
                required
                minLength={3}
                maxLength={50}
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type='tel'
                name='phone'
                placeholder='Phone*'
                required
                minLength={10}
                maxLength={10}
                pattern='^[0-9]{10}$'
                title='Please enter a valid 10-digit phone number'
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
                value={formData.phone}
                onChange={handleChange}
              />{' '}
              <input
                type='email'
                name='email'
                placeholder='Email*'
                required
                pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
                title='Enter a valid email address'
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name='variant'
                className={`w-full p-2 bg-transparent border-b-2   focus:outline-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : ' border-b-primaryRed'
                }`}
                onChange={handleChange}
                required
                defaultValue={''}
              >
                <option value='' disabled>
                  Select Variant
                </option>
                {data?.variants.map((variant, index) => (
                  <option key={index} value={variant.variant}>
                    {variant.variant}
                  </option>
                ))}
              </select>
              <select
                name='outlet'
                className={`w-full p-2 bg-transparent border-b-2   focus:outline-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : ' border-b-primaryRed'
                }`}
                onChange={handleChange}
                required
                defaultValue={''}
              >
                <option value='' disabled>
                  Select Outlet
                </option>
                {selectedState !== 'Odisha' && index < 9
                  ? cgOutlets[0].locations.map((outlet, i) => (
                      <option key={i} value={outlet.name}>
                        {outlet.name}
                      </option>
                    ))
                  : selectedState !== 'Odisha' && index > 8
                  ? cgOutlets[1].locations.map((outlet, i) => (
                      <option key={i} value={outlet.name}>
                        {outlet.name}
                      </option>
                    ))
                  : selectedState === 'Odisha' && index > 8
                  ? odOutlets[1].locations.map((outlet, i) => (
                      <option key={i} value={outlet.name}>
                        {outlet.name}
                      </option>
                    ))
                  : odOutlets[0].locations.map((outlet, i) => (
                      <option key={i} value={outlet.name}>
                        {outlet.name}
                      </option>
                    ))}
              </select>
              <button
                type='submit'
                disabled={loading}
                className={`px-4 py-2  ${
                  loading ? 'cursor-not-allowed' : ''
                } text-white duration-500 border-b-2   md:px-4 hover:shadow-lg  whitespace-nowrap ${
                  selectedState === 'Odisha'
                    ? 'bg-primaryBlue border-primaryBlue'
                    : 'bg-primaryRed border-primaryRed'
                } `}
              >
                {loading ? (
                  <div className='flex items-center justify-center gap-2'>
                    <FaSpinner className='animate-spin' /> Submitting
                  </div>
                ) : (
                  'Enquire Now'
                )}
              </button>
            </div>
            <p className='mt-6 text-xs text-gray-500'>
              *Disclaimer: I agree that by clicking the &apos;Enquir Now&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </form>
        </div>
      </section>
      {/* variant price */}
      <section id='variant-price-section'>
        <div className='pb-10 container mx-auto xl:max-w-7xl bg-white pt-2'>
          <h4 className='text-2xl font-bold text-primaryGray lg:mb-3'>
            Variants & Prices
          </h4>
          <h5 className='text-lg font-medium text-primaryGray mb-4'>
            Ex-Showroom
          </h5>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto'>
              <thead
                className={`text-white border border-b-2  ${
                  selectedState === 'Odisha'
                    ? ' border-b-primaryBlue bg-primaryBlue'
                    : 'border-b-primaryRed bg-primaryRed'
                }`}
              >
                <tr>
                  <th className='w-1/3 px-2 py-2 font-semibold text-left '>
                    Variant
                  </th>
                  <th className='w-1/3 px-2 py-2 font-semibold text-left '>
                    Transmission
                  </th>
                  <th className='w-1/3 px-2 py-2 font-semibold text-left '>
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.variants.map((variant, index) => (
                  <tr
                    key={index}
                    className={`border  hover:bg-opacity-10 ${
                      selectedState === 'Odisha'
                        ? 'hover:bg-primaryBlue'
                        : 'hover:bg-primaryRed'
                    }`}
                  >
                    <td className='px-2 py-2 text-primaryGray'>
                      {variant.variant}
                    </td>
                    <td className='px-2 py-2 text-primaryGray'>
                      {variant.transmission}
                    </td>
                    <td className='px-2 py-2 text-primaryGray'>
                      {variant.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Exterior and Interior */}
      <section id='exterior-interior-section'>
        <div className='py-10 bg-secondaryGray4 lg:py-20 my-10'>
          <div className='container flex flex-col items-center mx-auto r xl:max-w-7xl'>
            {index === 12 ? (
              <div className='rounded-lg '>
                <p
                  className={`  text-white text-center mb-6 text-lg w-min mx-auto px-4 lg:px-8 py-1.5 rounded-full ${
                    selectedState === 'Odisha'
                      ? ' bg-primaryBlue border-primaryBlue'
                      : 'bg-primaryRed border-primaryRed'
                  }`}
                >
                  Specification
                </p>
                <video
                  src='https://www.nexaexperience.com/slider_html_code/images/Desktop.mp4'
                  autoPlay
                  loop
                  muted
                  className='object-cover w-full rounded-lg'
                ></video>
              </div>
            ) : (
              <>
                {' '}
                <div className='flex justify-center  mb-6 text-xl '>
                  <button
                    onClick={() => setSelected('Exterior')}
                    aria-label='Exterior'
                    className={`   px-4 border  lg:px-8 py-1.5 rounded-l-lg ${
                      selected === 'Exterior' && selectedState === 'Odisha'
                        ? 'bg-primaryBlue    border-primaryBlue  text-white '
                        : selected === 'Exterior'
                        ? 'bg-primaryRed    border-primaryRed  text-white '
                        : 'text-secondaryGray2 bg-secondaryGray3'
                    }`}
                  >
                    Exterior
                  </button>
                  <button
                    onClick={() => setSelected('Interior')}
                    aria-label='Interior'
                    className={`   px-4 border  lg:px-8 py-1.5 rounded-r-lg ${
                      selected === 'Interior' && selectedState === 'Odisha'
                        ? 'bg-primaryBlue    border-primaryBlue  text-white '
                        : selected === 'Interior'
                        ? 'bg-primaryRed    border-primaryRed  text-white '
                        : 'text-secondaryGray2 bg-secondaryGray3'
                    }`}
                  >
                    Interior
                  </button>
                </div>
                {selected === 'Exterior' ? (
                  <VehicleDetailsSlider images={data?.exterior} />
                ) : (
                  <VehicleDetailsSlider images={data?.interior} />
                )}
              </>
            )}
          </div>
        </div>
      </section>
      {/* Key Specifications */}
      <section id='key-specifications'>
        <div className='container pt-6 pb-10 mx-auto xl:max-w-7xl lg:pb-12 px-1 '>
          <h4 className='text-2xl font-bold text-primaryGray lg:mb-6'>
            Key Specifications
          </h4>
          <div className='grid sm:gap-4 md:grid-cols-2 md:gap-16 lg:gap-28'>
            <div className='overflow-x-auto'>
              {data?.keySpecifications?.slice(0, 7).map((key, index) => (
                <div
                  key={index}
                  className='flex justify-between py-2 border-b hover:bg-secondaryGray4'
                >
                  <p>{key.label}</p>
                  <p>{key.value}</p>
                </div>
              ))}
            </div>
            <div className='overflow-x-auto'>
              {data?.keySpecifications?.slice(7).map((key, index) => (
                <div
                  key={index}
                  className='flex justify-between py-2 border-b hover:bg-secondaryGray4'
                >
                  <p>{key.label}</p>
                  <p>{key.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Blogs  */}
      {data && data?.blogs && data?.blogs.length && (
        <section id='blogs-section'>
          <div className='container pt-6 pb-10 mx-auto xl:max-w-7xl  px-1 '>
            {' '}
            <h4 className='text-2xl font-bold text-primaryGray mb-6'>
              {data?.name} Latest Blogs
            </h4>
            <div className='grid  gap-4 md:grid-cols-2 lg:gap-y-6  '>
              {data.blogs.map((post, i) => (
                <article
                  key={i}
                  className={`border rounded-lg px-4 py-6 hover:shadow-2xl  hover:text-white group flex justify-between flex-col ${
                    selectedState === 'Odisha'
                      ? 'hover:bg-primaryBlue '
                      : 'hover:bg-primaryRed '
                  }`}
                >
                  <div className=''>
                    <h4
                      title={post.title}
                      className='font-medium text-xl min-h-4 mb-2 '
                    >
                      {post.title}
                    </h4>
                  </div>
                  <div className=''>
                    {' '}
                    <p className='text-sm '>
                      Published by:{' '}
                      <span className='italic'>{post.author}</span>{' '}
                    </p>
                    <h5
                      className='min-h-4  mt-2 line-clamp-5 text-sm mb-2 '
                      title={post.desc}
                    >
                      {post.desc}
                    </h5>
                    <Link
                      href={post.link}
                      className=' underline group-hover:text-white '
                    >
                      Read More
                    </Link>
                    {/* <Link href={post.link} className="w-full text-sm">
                      <button className="text-primaryBlue group-hover:bg-white group-hover:text-primaryBlue  border px-4 py-1.5 rounded w-full text-sm ">
                        Read More
                      </button>
                    </Link>
                     <Link href={post.linkCG} className="w-1/2 text-sm">
                    {" "}
                    <button className="text-primaryBlue group-hover:text-white  border px-4 py-1.5 rounded w-full ">
                      Explore
                    </button>
                  </Link> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}{' '}
      {/* Explore More */}
      <section id='explore-more-section'>
        <div className='container pt-6 pb-10 mx-auto xl:max-w-7xl lg:pb-20 px-1 '>
          {' '}
          <h4 className='text-2xl font-bold text-primaryGray mb-6'>
            Explore More Vehicles
          </h4>
          <div className='grid gap-4 md:grid-cols-2  lg:grid-cols-3'>
            {data?.exploreMore?.map((vehicle, index) => (
              <div
                key={index}
                className={`border rounded-lg hover:shadow-lg  flex-col justify-between ${
                  index > 1
                    ? 'hidden md:flex'
                    : index > 0
                    ? 'hidden lg:flex'
                    : 'flex'
                }`}
              >
                <img
                  src={models?.[vehicle]?.thumbnail}
                  alt={models?.[vehicle]?.subName}
                  className='my-auto'
                />
                <div className='p-4 text-center '>
                  {' '}
                  <p className='pb-1 text-lg font-bold'>
                    {models?.[vehicle]?.subName}
                  </p>
                  <p className='text-sm text-primaryGray pb-4'>
                    Starting from ₹ {models?.[vehicle]?.variants[0].price} /-
                  </p>
                  <div className=''>
                    {' '}
                    {/* <button
                    className={`w-full  col-span-4  font-bold text-sm rounded-lg px-2 py-2 border  ${
                      selectedState === "Odisha"
                        ? "text-primaryBlue group-hover:bg-white hover:bg-primaryBlue hover:text-white"
                        : "text-primaryRed group-hover:bg-white hover:bg-primaryRed hover:text-white"
                    }`}
                  >
                    Book Test Drive
                  </button>{" "} */}
                    <Link
                      href={
                        selectedState === 'Odisha'
                          ? models?.[vehicle]?.linkOD
                          : models?.[vehicle]?.linkCG
                      }
                      className='w-full'
                    >
                      <button
                        className={`w-full border col-span-4 border-white font-bold text-sm rounded-lg px-2 py-2  ${
                          selectedState === 'Odisha'
                            ? 'group-hover:text-primaryBlue group-hover:bg-white bg-primaryBlue text-white'
                            : 'group-hover:text-primaryRed group-hover:bg-white bg-primaryRed text-white'
                        }`}
                      >
                        Explore Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ModalTestDrive
        showTestDrive={showTestDrive}
        setShowTestDrive={setShowTestDrive}
        model={data?.subName}
        index={index}
      />
    </div>
  );
};

export default VehicleDetailTemplate;
