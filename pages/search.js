import Response from "@/Response";
import SearchHeader from "@/components/SearchHeader";
import Head from "next/head";
import SearchResults from "@/components/SearchResults";
import { useRouter } from "next/router";
import ImageResults from "@/components/ImageResults";
const Search = ({ results }) => {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}- Search page</title>
      </Head>
      {/* search Header */}
      <SearchHeader />
      {/*search web and images Results*/}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}
