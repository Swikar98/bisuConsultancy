import { useState } from "react";

export default function Contactmain() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fname, lname, email, subject, message }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus('Message sent Successfully!');
      setFname('');
      setLname('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setStatus(`Error: ${data.error}`);
    }
  };

  return (
    <section className="relative" id="contact">
      <div className="absolute inset-0 top-0 z-0">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#50E3C2", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,64L40,85.3C80,107,160,149,240,170.7C320,192,400,192,480,197.3C560,203,640,213,720,213.3C800,213,880,203,960,197.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#gradient2)"
          />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="max-w-3xl text-center sm:text-center md:mx-auto">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 text-lg text-gray-600 dark:text-slate-400">
                Bisu Global
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      New South Wales 2145 Australia
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Westmead
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: info@bisu.com.au 
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-5 md:mt-0 md:pl-6">
              <form onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <label
                      htmlFor="firstName"
                      className="block my-2 text-left text-sm font-medium text-gray-900"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter First Name"
                      required
                      name="fname"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <label
                      htmlFor="lastName"
                      className="block my-2 text-left text-sm font-medium text-gray-900"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter Last Name"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block my-2 text-left text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Your email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block my-2 text-left text-sm font-medium text-gray-900"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                    placeholder="What issue/suggestion do you have?"
                    required
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block my-2 text-left text-sm font-medium text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                    placeholder="Query/Suggestion..."
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 p-2 float-right text-white rounded-lg border-green-600 bg-blue-600 hover:scale-105"
                >
                  Send message
                </button>
              </form>
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bottom-0 z-0">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4A90E2", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#50E3C2", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,64L40,85.3C80,107,160,149,240,170.7C320,192,400,192,480,197.3C560,203,640,213,720,213.3C800,213,880,203,960,197.3C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#gradient2)"
            transform="rotate(180)"
          />
        </svg>
      </div>
    </section>
  );
}
