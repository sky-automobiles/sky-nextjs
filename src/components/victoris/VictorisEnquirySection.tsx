'use client';

import { cgOutlets, odOutlets } from '@/constants';
import { useAppContext } from '@/context';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { REQUIREMENT_OPTIONS, Requirement } from './VictorisEnquiryModal';

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  requirement: Requirement | '';
}

interface VictorisEnquirySectionProps {
  onSuccess?: () => void;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  email: '',
  location: '',
  requirement: '',
};

const VictorisEnquirySection: React.FC<VictorisEnquirySectionProps> = ({
  onSuccess,
}) => {
  const { selectedState } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const locations =
    selectedState === 'Odisha'
      ? [...odOutlets[0].locations, ...odOutlets[1].locations]
      : [...cgOutlets[0].locations, ...cgOutlets[1].locations];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/test-drive', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          model: 'VICTORIS',
          outlet: formData.location,
          state: selectedState,
          leadFrom: `Victoris Enquiry Section - ${formData.requirement}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === true) {
        toast.success(
          'Thank you for contacting us. We will get back to you soon!'
        );
        setFormData(initialFormData);
        onSuccess?.();
      } else {
        toast.error('Failed to send request. Please try again later.');
      }
    } catch (error) {
      toast.error('Failed to send request. Please try again later.');
      console.error('Error sending request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='victoris-enquiry-section'>
      <div className='py-10 lg:py-16 bg-secondaryGray4'>
        <div className='container mx-auto xl:max-w-7xl px-1'>
          <h4 className='text-2xl font-bold text-primaryGray mb-2'>
            Still Have Questions About the{' '}
            <span
              className={
                selectedState === 'Odisha'
                  ? 'text-primaryBlue'
                  : 'text-primaryRed'
              }
            >
              VICTORIS
            </span>
            ?
          </h4>
          <p className='text-sm text-gray-500 mb-6'>
            Fill in your details below and our team will reach out with
            everything you need — test drives, pricing, or the brochure.
          </p>
          <form
            onSubmit={handleSubmit}
            className='bg-white rounded-lg p-4 md:p-6 shadow'
          >
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <input
                type='text'
                name='name'
                placeholder='Name*'
                required
                pattern='^[a-zA-Z. ]+$'
                minLength={3}
                maxLength={50}
                title='Only alphabets are allowed with minimum 3 and maximum 50 characters'
                className={`w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none rounded-none ${
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
                placeholder='Mobile Number*'
                required
                minLength={10}
                maxLength={10}
                pattern='^[6-9][0-9]{9}$'
                title='Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9'
                className={`w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none rounded-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type='email'
                name='email'
                placeholder='Email ID*'
                required
                pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
                title='Enter a valid email address'
                className={`w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none rounded-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              <select
                name='location'
                required
                value={formData.location}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 focus:outline-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
              >
                <option value='' disabled>
                  City / Location*
                </option>
                {locations.map((outlet, i) => (
                  <option key={i} value={outlet.name}>
                    {outlet.name}
                  </option>
                ))}
              </select>
              <select
                name='requirement'
                required
                value={formData.requirement}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border-b-2 focus:outline-none ${
                  selectedState === 'Odisha'
                    ? 'border-b-primaryBlue'
                    : 'border-b-primaryRed'
                }`}
              >
                <option value='' disabled>
                  Interested Service*
                </option>
                {REQUIREMENT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type='submit'
                disabled={loading}
                className={`px-4 py-2 text-white duration-500 border-b-2 md:px-4 hover:shadow-lg whitespace-nowrap ${
                  loading ? 'cursor-not-allowed' : ''
                } ${
                  selectedState === 'Odisha'
                    ? 'bg-primaryBlue border-primaryBlue'
                    : 'bg-primaryRed border-primaryRed'
                }`}
              >
                {loading ? (
                  <div className='flex items-center justify-center gap-2'>
                    <FaSpinner className='animate-spin' /> Submitting
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
            <p className='mt-6 text-xs text-gray-500'>
              *Disclaimer: I agree that by clicking the &apos;Submit&apos;
              button above, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VictorisEnquirySection;
