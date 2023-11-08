import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";
export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
  return (
    <div>
      <Head>
        <title>Google v3</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          width={300}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google Logo"
        />
        <div className="flex w-full mt-5 max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
