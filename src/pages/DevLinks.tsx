import Navbar from "../UI/Navbar";
import Mobile from "../features/preview/Mobile";
import LinksForm from "../features/links/LinksForm";

const DevLinks = () => {
  return (
    <section className="m-5">
      <Navbar />
      <div className="flex mt-5 flex-row gap-5">
        <Mobile />
        <LinksForm />
      </div>
    </section>
  );
};
export default DevLinks;
