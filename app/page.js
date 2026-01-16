import SiteHeader from "./Components/SiteHeader.js";
import Welcome from "./Components/Welcome.js"; 
import RideSection from "./Components/RideSection.js";
import SnacksSection from "./Components/SnacksSection.js";

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Welcome />
      <RideSection />
      <SnacksSection />
    </main>
); }