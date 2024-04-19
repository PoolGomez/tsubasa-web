import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AppLogo({color}:{color:string}) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-${color}`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[15px]">Tsubasa Web</p>
    </div>
  );
}
