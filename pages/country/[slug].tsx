import { destinations } from "@app/data/destinations";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

const StudyDestination = ({
  slug,
  name,
  description,
}: (typeof destinations)[0]) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-[#0261b2] text-center py-16 flex flex-col w-full text-lg gap-4">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/country">
            <p className="text-[#f4f0f8] font-medium">Study Destinations •</p>
          </Link>
          <Link href={`/country/${slug}`}>
            <span className="font-semibold text-white">&nbsp;{name}</span>
          </Link>
        </div>
        <h1 className="text-4xl font-semibold text-[#f4f0ff]">
          Study in {name}
        </h1>
      </div>
      <div className="flex flex-row gap-4 justify-center px-4 mt-[-32px]">
        <Image
          src={`/country/${slug}/00.jpg`}
          width={500}
          height={450}
          alt="Hero Image"
          className="rounded-xl "
        />
        <Image
          src={`/country/${slug}/01.jpg`}
          width={500}
          height={450}
          alt="Hero Image"
          className="rounded-xl hidden lg:block"
        />
      </div>
      <p className="text-center text-xl mt-8 md:w-[750px] px-4">
        {description}
      </p>
      <button className="bg-[#f4f0ff] text-[#5327b3] font-semibold rounded-xl hover:bg-[#f4e0ff] px-6 py-2 mt-4">
        <Link href="https://registration.yflyinternational.com/">
          Enquire Now
        </Link>
      </button>
    </div>
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
  const destination = destinations.find(
    (destination) => destination.slug === params?.slug
  );
  if (!destination) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      slug: destination?.slug,
      name: destination?.name,
      description: destination?.description,
    },
  };
};
