import Locker from "@/components/locker/locker";
import LocksTable from "@/components/locksTable/lockstable";
const Home = () => {
  return (
    <div>
      <Locker />
      <div className="my-16 w-full flex items-center justify-center">
        <div className="w-full h-2 bg-[#1f1f1f]"></div>
        <span className="mx-4 text-gray-400 text-6xl">◊</span>
        <div className="w-full h-2 bg-[#1f1f1f]"></div>
      </div>
      <LocksTable />
    </div>
  );
};

export default Home;
