import clsx from 'clsx';

export default function Position({ position }: { position: string }) {
  return (
    <span
      className={clsx(
        'inline-flex rounded px-1',
        {
          'bg-[#d76a26] text-xs font-satoshi text-white hover:bg-opacity-90': position === 'P',
          'bg-[#4f18f3] text-xs font-satoshi text-white hover:bg-opacity-90': position === 'DF',
          'bg-[#3CA745] text-xs font-satoshi text-white hover:bg-opacity-90': position === 'MCD' || position ==='MCA',
        //   'bg-[#3CA746] text-sm font-medium text-white hover:bg-opacity-90': position === 'MCA',
          'bg-[#DC3545] text-xs font-satoshi text-white hover:bg-opacity-90': position === 'DL',
        },
      )}
    >
      {position === 'P' ? (
        <>
          P
          {/* <ClockIcon className="ml-1 w-4 text-gray-500" /> */}
        </>
      ) : null}
      {position === 'DF' ? (
        <>
          DF
          {/* <CheckIcon className="ml-1 w-4 text-white" /> */}
        </>
      ) : null}
      {position === 'MCD' ? (
        <>MCD</>
      ) : null}
      {position === 'MCA' ? (
        <>MCA</>
      ) : null}
      {position === 'DL' ? (
        <>DL</>
      ) : null}
    </span>
  );
}
