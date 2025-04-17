import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-red text-red-600 py-10 flex">
      <div className="container mx-auto text-center px-4 items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="mb-6">
              <img
                src="https://i.postimg.cc/mgfwm6fM/IMG-20240907-WA0001.jpg"
                alt="Dakshi Foundation Logo"
                className="mx-auto mb-4 w-48"
              />
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg">Contact Us</h2>
            <ul className="mt-2 space-y-1">
              <li><a href="mailto:info@dakshifoundation.in" className="underline">info@dakshifoundation.in</a></li>
              <li><a href="tel:+919424499188" className="underline">+91 9424499188</a></li>
            </ul>
          </div>


          <div>
            <h2 className="font-bold text-lg">Join us</h2>
            <ul className="mt-2 space-y-1">
              <li className='underline'><Link to="/volunteer">Become a volunteer</Link></li>
              <li className='underline'><Link to="/donate">Make a donation</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-lg">Privacy Policy</h2>
            <ul className="mt-2 space-y-1">
              <li className='underline'><Link to="/privacy-policy">Terms & Condition</Link></li>
              <li className='underline'><Link to="/privacy-policy">Cancellation & Refund</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-red-500 mb-6" />
        <div className="flex justify-center space-x-6 items-center">
          <ul className="flex justify-center mt-5 space-x-5">

            <li>
              <a href="https://www.facebook.com/share/FU3ao93LMJuqaoSk/?mibextid=qi2Omg" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg className="w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </li>


            <li>
              <a href="https://x.com/DakshiF74186" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg className="w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                  </path>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/dakshifoundation?igsh=NGxmc2hrcWt2OGF3" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg className="w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"></path>
                </svg>
              </a>
            </li>

            <li>
              <a href="https://wa.me/qr/AN3JSVC3BK7BE1" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="white" /><stop offset="100%" stopColor="white" /></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#DC2626" /><stop offset="100%" stopColor="#DC2626" /></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" /><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" /><path fill="#DC2626" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" /></svg>

              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/@DakshiFoundation" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg className="w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M23.499 6.203a2.995 2.995 0 00-2.11-2.116C19.946 3.5 12 3.5 12 3.5s-7.945 0-9.389.588a2.994 2.994 0 00-2.11 2.115C0 7.64 0 12 0 12s0 4.36.501 5.797a2.995 2.995 0 002.11 2.116C4.055 20.5 12 20.5 12 20.5s7.946 0 9.389-.587a2.996 2.996 0 002.11-2.116C24 16.36 24 12 24 12s0-4.36-.501-5.797zM9.75 15.02v-6.04l6.038 3.02-6.038 3.02z">
                  </path>
                </svg>
              </a>
            </li>


            <li>
              <a href="https://www.linkedin.com/in/dakshi-foundation-6290a72a2" className="text-red-500 hover:text-red-900 dark:hover:text-red dark:text-red-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.396c0-1.285-.025-2.939-1.792-2.939-1.795 0-2.069 1.4-2.069 2.849v5.486H9.47V8.998h3.414v1.563h.047c.476-.897 1.635-1.84 3.364-1.84 3.598 0 4.264 2.37 4.264 5.456v6.275zM5.337 7.433a2.07 2.07 0 01-2.068-2.07 2.07 2.07 0 012.07-2.068c1.143 0 2.068.926 2.068 2.068a2.07 2.07 0 01-2.068 2.07zM6.89 20.452H3.781V8.998H6.89v11.454zM22.225 0H1.771C.791 0 .001.774.001 1.729v20.543C0 23.226.791 24 1.771 24h20.451c.981 0 1.773-.774 1.773-1.728V1.729C24 .774 23.208 0 22.225 0z" />
                </svg>

              </a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
