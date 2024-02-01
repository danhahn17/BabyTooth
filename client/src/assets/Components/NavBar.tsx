import { Logo } from './Logo';

export function NavBar() {
  return (
    <div className="w-full bg-main h-12 flex text-white justify-start text-xl">
      <Logo />
      {/* move to the left */}
      <div className="flex">
        <button className="px-7">Schedule an Appointment</button>
        <button className="px-7">Teeth Timeline</button>
        <button className="px-7">Treatment Options</button>
        <button className="px-7">Common Diseases</button>
      </div>
    </div>
  );
}
