import React from 'react';
import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useRef } from 'react';

const OrderModal = ({ isOpenModal, setIsOpenModal }) => {

  const orderRef = useRef(null);
  const closeModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = 'unset'; //Enable scrolling
  };


  useOnClickOutside(orderRef , closeModal )


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        address: '',
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitHandler = (data) => {
    console.log('Data : ', data);

    if (data.name === '' && data.email === '' && data.address === '') {
      toast.error('Please fill all details');
    } else {
      toast.success('Yay! Order Confirmed');
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 grid place-items-center z-[9999] backdrop-blur-sm">
      {/* ---------------- modal --------------- */}

      <div className="sm:w-[400px] xs:w-[370px] w-[300px] min-h-[300px] bg-offwhite dark:bg-gray-700 transition-all dark:transition-all duration-300 py-8 px-6 rounded-lg order-anime flex flex-col gap-y-8" ref={orderRef} onClick={(event)=> event.stopPropagation()}>
        {/* ----------- heading ------------ */}

        <div className="flex justify-between">
          <h2 className="font-semibold xs:text-lg text-[16px]">Order Your Book</h2>

          <p
            onClick={() => closeModal()}
            className="text-2xl cursor-pointer hover:text-primary"
          >
            <IoClose />
          </p>
        </div>

        {/* ----------- Form ---------------------- */}

        <form
          className="flex flex-col gap-y-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          {/* -------------- name ---------------- */}

          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-3xl px-3 py-[6px] border border-gray-500 dark:border-2 dark:border-gray-900  dark:text-gray-900"
              {...register('name', { required: true })}
            />
            {errors.name && <span className='text-sm text-red-700'>This field is required</span>}
          </div>

          {/* -------------- email ---------------- */}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-3xl px-3 py-[6px] border border-gray-500 dark:text-gray-900 dark:border-2 dark:border-gray-900"
              {...register('email', { required: true })}
            />
            {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
          </div>

          {/* -------------- Address ---------------- */}

          <div>
            <textarea
              name="address"
              placeholder="Enter Your Address"
              className="w-full h-[100px] rounded-md px-3 py-[6px] border border-gray-500 dark:text-gray-900 dark:border-2 dark:border-gray-900"
              {...register('address', { required: true })}
            />
            {errors.address && <span className='text-sm text-red-700'>This field is required</span>}
          </div>

          {/* ------------- Order Now ----------------- */}

          <div className="grid place-items-center">
            <button
              type="submit"
              className="flex items-center gap-x-2 text-white font-semibold px-3 py-1 rounded-3xl blue-gradient border border-white hover:border dark:border dark:border-black dark:hover:border-white dark:transition-all dark:duration-500   hover:border-blue-700 transition-all duration-400"
            >
              Order Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
