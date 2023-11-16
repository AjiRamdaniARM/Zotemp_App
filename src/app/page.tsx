import SectionHero from "./component/section-hero1";
import SectionAcces from "./component/section-acces";
import SectionPhAi from "./component/section-ph-ai";
import SectionPpt from "./component/section-ppt";
import SectionCanva from "./component/section-canva";
import SectionCapcut from "./component/section.capcut";

export default function Home() {
  return (
    <>
      <div className="container-2xl  ">
        <SectionHero />
        <SectionAcces />
        <SectionPhAi />
        <SectionPpt />
        <SectionCanva />
        <SectionCapcut />
      </div>
    </>
  );
}