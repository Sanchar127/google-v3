import Head from "next/head";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import ImageResults from "@/components/ImageResults";
import { useRouter } from "next/router";

const Search = ({ results }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>
      <SearchHeader />
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

  const searchTypeParam = context.query.searchType
    ? `&searchType=${context.query.searchType}`
    : "";
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${searchTypeParam}&start=${startIndex}`;

  let data = null;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      data = await response.json();
    } else {
      // Handle the error case here, e.g., log the error or return an error response.
      console.error(`Failed to fetch data. Status: ${response.status}`);
    }
  } catch (error) {
    // Handle network errors here.
    console.error(`Network error: ${error.message}`);
  }

  return {
    props: {
      results: data || null,
    },
  };
}
