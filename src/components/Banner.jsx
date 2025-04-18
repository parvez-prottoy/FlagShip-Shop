import banner from "../assets/banner.png";
import Button from "./shared/Button";
export default function Banner() {
  return (
    <section className="py-12 w-auto ">
      <img className="md:max-w-[50%] mx-auto" src={banner} alt="Banner" />
      <div className="text-center space-y-4">
        <h1 className="font-thin text-6xl text-gray-900">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Best place to browse, search, view details and purchase of top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24">
          <input
            type="text"
            placeholder="Search Phone by Name"
            className="bg-white border border-gray-300 rounded shadow-md w-2/3 h-12 px-4 mb-3
            focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    </section>
  );
}
