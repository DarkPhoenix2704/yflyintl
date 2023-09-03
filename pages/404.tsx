import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-[#2860ad] py-16 gap-4 w-full flex flex-col items-center">
        <div className="flex flex-row text-sm justify-center">
          <Link href="/">
            <p className="text-[#f4f0f8] font-medium">Home •</p>
          </Link>
          <Link href={`/`}>
            <span className="font-semibold text-white">&nbsp;404</span>
          </Link>
        </div>
        <h1 className="text-4xl text-center font-semibold text-white">
          Looks like you are lost
        </h1>
        <p className="text-white text-center">
          The page you are looking for is not available or has been removed.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
