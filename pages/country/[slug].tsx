import { destinations } from "@app/data/destinations";
import { GetStaticPaths, GetStaticProps } from "next";

const StudyDestination = ({}) => {
  return (
    <>
      <h1>Study Destination</h1>
    </>
  );
};

export default StudyDestination;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinations.map((destination) => ({
    params: { slug: destination.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  };
};
