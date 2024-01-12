import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <>
      <div className="w-full overflow-auto h-screen md:snap-y  snap-mandatory relative bg-white">
      <Routers />
    </div>
    </>
  );
};

export default Layout;
