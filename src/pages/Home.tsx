import QuickGen from "../components/homepage/QuickGen";
import Recent from "../components/homepage/Recent";
import Stats from "../components/homepage/Stats";

function Home() {
  return (
    <>
      <div className="px-3 md:px-8 lg:px-12">
        <Stats />
        <QuickGen />
        <Recent />
      </div>
    </>
  );
}

export default Home;
