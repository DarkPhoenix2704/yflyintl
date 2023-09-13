import Link from "next/link";
import { useState } from "react";
import MapComponent from "@app/components/MapComponent";
import { HiOutlineMail, HiPhone, HiMap } from "react-icons/hi";

const ContactPage = () => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [subject, setSubject] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#2860ad] py-16 gap-4 w-full flex flex-col items-center">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link href={`/`}>
            <span className="font-semibold text-white">&nbsp;Contact Us</span>
          </Link>
        </div>
        <h1 className="text-4xl text-center font-semibold text-white">
          Have a question?
        </h1>
        <p className="text-white text-center">
          We are here to help. Send us an email and we will get back to you as
          possible
        </p>
      </div>
      <div className="flex flex-col w-11/12 lg:flex-row justify-center items-center mt-8">
        <div className="w-full lg:w-1/2 flex flex-col items-left">
          <h1 className="text-xl font-semibold py-1">Connect Us </h1>
          <Link
            href="mailto:info@yflyinternational.com"
            className="flex flex-row text-[#7f7f8f] items-center gap-2"
          >
            <HiOutlineMail className="text-xl" />
            info@yflyinternational.com{" "}
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=919947788222&text=Hi"
            className="flex flex-row text-[#7f7f8f] items-center gap-2"
          >
            <HiPhone className="text-xl" />
            +919947788222
          </Link>
          <p className="text-md flex gap-2 text-[#7f7f8f]">
            <HiMap className="text-xl" />
            PVM Heights, One Way Junction,
            <br />
            Muvattupuzha Kerala
          </p>
          <MapComponent />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-center"
        >
          <input
            className="w-11/12 lg:w-[550px] outline-slate-200 outline-1 border-slate-200 border-2 h-[50px] mt-8 px-4 rounded-md"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="w-11/12 lg:w-[550px] outline-slate-200 outline-1 border-slate-200 border-2 h-[50px] mt-8 px-4 rounded-md"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="w-11/12 lg:w-[550px] outline-slate-200 outline-1 border-slate-200 border-2 h-[50px] mt-8 px-4 rounded-md"
            placeholder="Subject"
            required
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <textarea
            className="w-11/12 lg:w-[550px] outline-slate-200 outline-1 border-slate-200 border-2 h-[200px] mt-8 px-4 py-4 rounded-md"
            placeholder="Message"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-11/12 lg:w-[550px] bg-[#2860ad] flex items-center justify-center text-white h-[50px] mt-8 px-4 rounded-md"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </>
            ) : success ? (
              "Email Sent"
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
