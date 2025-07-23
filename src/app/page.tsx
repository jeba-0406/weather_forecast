import WeatherComponent from "@/component/weatherComponent";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <Image
        src="/bgg.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Content on top */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <WeatherComponent />
      </div>
    </div>
  );
}
