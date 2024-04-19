// import { fetchFilteredCategories } from "@/app/lib/data/categories"
import players from "@/data/players";
import Image from "next/image";
import Status from "../common/status";
import Position from "../common/position";
import Affinity from "../common/affinity";
// import { DeleteCategory, UpdateCategory } from "./buttons";

export default function PlayersTable(
  // {query, currentPage}:{query: string, currentPage: number}
  { query }: { query: string }
) {
  // const categories = await fetchFilteredCategories(query, currentPage);
  const playersfiltered = players.filter((p) => {
    if (p && p.nombre || p && p.pais || p && p.afinidad) {
      const texto = p.nombre.toLowerCase() + p.pais.toLowerCase() + p.afinidad.toLowerCase();
      return texto.includes(query.toLowerCase());
    }
  });

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-11">

        <div className="p-1 xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Jugador
          </p>
        </div>

        <div className="hidden p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Nombre
          </p>
        </div>

        <div className="hidden p-1 text-center sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Posición
          </p>
        </div>

        <div className="p-1 text-center xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            País
          </p>
        </div>

        <div className="p-1 xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Afinidad
          </p>
        </div>

        <div className="p-1 xl:p-5">
          <p className="text-xs font-normal xsm:text-base  text-black dark:text-white">
            Energia
          </p>
        </div>

        

        <div className="p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Total
          </p>
        </div>

        <div className="hidden p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Ataque
          </p>
        </div>

        {/* <div className="hidden p-2.5 text-center sm:block xl:p-5"> */}
        <div className="hidden p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Defensa
          </p>
        </div>

        <div className="hidden p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Físico
          </p>
        </div>

        <div className="hidden p-1 sm:block xl:p-5">
          <p className="text-xs font-normal xsm:text-base text-black dark:text-white">
            Parada
          </p>
        </div>

        {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ataque
            </h5>
          </div> */}

        {/* <div className="p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-black dark:text-white">
              Accion
            </h5>
          </div> */}
      </div>

      {playersfiltered.map((player, key) => (
        <div
          className={`grid grid-cols-5 sm:grid-cols-11 ${
            key === playersfiltered.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center px-2 xl:p-5">
            <div className="flex-shrink-0">
              <Image
                src={player.imagen}
                alt="imagen"
                width={48}
                height={48}
                quality={100}
              />
            </div>
            {/* <p className="hidden text-black dark:text-white sm:block text-xs">
              {player.nombre}
            </p> */}
          </div>

          <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white sm:block text-xs">
              {player.nombre}
            </p>
          </div>

          {/* <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.posicion}</p>
          </div> */}

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-1">
            
          {player.posicion.map((pos, key) => <Position key={key} position={pos} /> )

          }

              {/* <Position position={"MCA"} />
              <Position position={"MCD"} />
              <Position position={"MCD"} /> */}
            

            
                
          </div>


          <div className="flex items-center justify-center gap-1 p-1 xl:p-5">
            <div className="flex-shrink-0">
              <Image
                className="border-2 border-black"
                src={player.pais_imagen}
                alt="imagen"
                width={24}
                height={24}
                quality={100}
              />
            </div>
            {/* <p className="hidden text-black dark:text-white sm:block text-xs">
              {player.pais}
            </p> */}
          </div>

          <div className="flex items-center justify-center p-1 xl:p-5 ">
            <Affinity affinity={player.afinidad} />
            {/* <p className="text-black dark:text-white text-xs">{player.afinidad}</p> */}
          </div>

          <div className="flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.energia}</p>
          </div>

          {/* <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <Status status={player.pais} />
            </div> */}

          <div className="flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.total}</p>
          </div>

          <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.ataque}</p>
          </div>

          <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.defensa}</p>
          </div>

          <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.fisico}</p>
          </div>

          <div className="hidden sm:flex items-center p-1 xl:p-5">
            <p className="text-black dark:text-white text-xs">{player.parada}</p>
          </div>

          {/* <div className="items-center justify-center p-2.5 sm:flex xl:p-5">
              <div className="flex justify-end gap-3">
                  Botones
              </div>
            </div> */}
        </div>
      ))}
    </div>
  );
}
