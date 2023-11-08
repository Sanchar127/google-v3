import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";

const search = () => {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      {/* search Header */}
      <SearchHeader />
      {/*search Results*/}
    </div>
  );
};

export default search;
