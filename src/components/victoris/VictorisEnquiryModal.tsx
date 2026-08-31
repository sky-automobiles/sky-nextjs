'use client';

import { useAppContext } from '@/context';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';

export const REQUIREMENT_OPTIONS = [
  'Test Drive',
  'On-Road Price',
  'Brochure',
  'General Enquiry',
] as const;

export type Requirement = (typeof REQUIREMENT_OPTIONS)[number];

interface FormData {
  name: string;
  phone: string;
  email: string;
  requirement: Requirement | '';
}

interface VictorisEnquiryModalProps {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
  defaultRequirement?: Requirement;
}

const VictorisEnquiryModal: React.FC<VictorisEnquiryModalProps> = ({
  show,
  onClose,
  onSuccess,
  defaultRequirement,
}) => {
  const { selectedState } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    requirement: defaultRequirement || '',
  });

  useEffect(() => {
    if (show) {
      setFormData((prev) => ({
        ...prev,
        requirement: defaultRequirement || prev.requirement,
      }));
    }
  }, [show, defaultRequirement]);

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'victoris-modal-container') {
      onClose();
    }
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
          outlet: 'Victoris Landing Page',
          state: selectedState,
          leadFrom: `Victoris Popup - ${formData.requirement}`,
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
        setFormData({ name: '', phone: '', email: '', requirement: '' });
        onSuccess();
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

  if (!show) return null;

  return (
    <div
      id='victoris-modal-container'
      onClick={handleOnClose}
      className='fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50 px-2'
    >
      <div className='bg-white w-full max-w-md rounded py-6 m-2 md:py-6 select-none px-4 relative'>
        <button
          type='button'
          aria-label='Close'
          onClick={onClose}
          className='absolute top-3 right-4 text-xl text-gray-400 hover:text-gray-700'
        >
          &times;
        </button>
        <h4 className='text-xl font-semibold text-primaryGray mb-1'>
          Get in Touch —{' '}
          <span
            className={
              selectedState === 'Odisha' ? 'text-primaryBlue' : 'text-primaryRed'
            }
          >
            Maruti VICTORIS
          </span>
        </h4>
        <p className='text-sm text-gray-500 mb-4'>
          Share your details and our team will assist you right away.
        </p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name='name'
              placeholder='Name*'
              required
              pattern='^[a-zA-Z. ]+$'
              minLength={3}
              maxLength={50}
              title='Only alphabets are allowed with minimum 3 and maximum 50 characters'
              className={`w-full p-2 bg-transparent border-b-2 focus:outline-none ${
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
              placeholder='Phone Number*'
              required
              minLength={10}
              maxLength={10}
              pattern='^[6-9][0-9]{9}$'
              title='Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9'
              className={`w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none ${
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
              placeholder='Email*'
              required
              pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'
              title='Enter a valid email address'
              className={`w-full p-2 bg-transparent border-b-2 appearance-none focus:outline-none ${
                selectedState === 'Odisha'
                  ? 'border-b-primaryBlue'
                  : 'border-b-primaryRed'
              }`}
              value={formData.email}
              onChange={handleChange}
            />
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
                Select Requirement*
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
              className={`mt-4 px-2 py-2 text-sm duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg whitespace-nowrap text-white ${
                selectedState === 'Odisha'
                  ? 'bg-primaryBlue border-primaryBlue'
                  : 'border-primaryRed bg-primaryRed'
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
            <p className='mt-4 text-[10px] text-gray-500'>
              *Disclaimer: I agree that by clicking the &apos;Submit&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VictorisEnquiryModal;
