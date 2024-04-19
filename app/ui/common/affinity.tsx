import clsx from 'clsx';

export default function Affinity({ affinity }: { affinity: string }) {
  return (
    <span
      className={clsx(
        'inline-flex rounded px-3 py-2',
        {
          'bg-[#DC3545] text-sm font-medium text-white hover:bg-opacity-90': affinity === 'fuerza',
          'bg-[#253fe7] text-sm font-medium text-white hover:bg-opacity-90': affinity === 'agilidad',
          'bg-[#3CA745] text-sm font-medium text-white hover:bg-opacity-90': affinity === 'destreza',
        },
      )}
    >
      {affinity === 'fuerza' ? (
        <>F</>
      ) : null}
      {affinity === 'agilidad' ? (
        <>A</>
      ) : null}
      {affinity === 'destreza' ? (
        <>D</>
      ) : null}
    </span>
  );
}
