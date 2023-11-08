import SectionHero from "./component/section-hero1";
import SectionAcces from "./component/section-acces";

export default function Home() {
  return (
    <>
      <div className="container-2xl  ">
        <SectionHero />
        <SectionAcces />
      </div>
    </>
  );
}