import { NavBar } from './assets/Components/NavBar';
import { FootBar } from './assets/Components/FootBar';
import { Calendar } from './assets/Components/Calendar';
// import { LandingPage } from './assets/Components/LandingPage';
// import { Timeline } from './assets/Components/Timeline';

export default function App() {
  return (
    <div className="bg-main-bg bg-cover">
      <NavBar />
      {/* <LandingPage /> */}
      {/* <Timeline /> */}
      <Calendar />
      <FootBar />
    </div>
  );
}
