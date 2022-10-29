import {useForm, ValidationError} from '@formspree/react';

// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function ContactForm() {

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

    if (state.succeeded) {
        return <p className='text-xl font-medium text-green-800'>Thank you for your submission</p>
    }

  return (
    <>
        <h1 className='text-3xl font-bold mb-5'>Contact Form</h1>

            <form className='space-y-4 w-full md:w-96' onSubmit={handleSubmit}>
            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
            <input id="name" type="text" name="name" required
              className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input id="email" type="email" name="email" required
              className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Your Message</label>
            <textarea 
                rows={4}
                id="message" 
                name="message" 
                placeholder='Write your message Here'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                required
              />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting}
            className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Submit
            </button>
            <ValidationError errors={state.errors} />
            </form>
    </>
  )
}
