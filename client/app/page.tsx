import { lusitana } from "@/app/ui/fonts";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        Welcome
      </p>
    </main>
  );
};

export default Page;
