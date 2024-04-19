import Search from "../ui/common/search";
import { lusitana } from "../ui/fonts";
import PlayersTable from "../ui/players/table";

export default function Page({
    searchParams
  }:{
    searchParams?:{
      query?: string;
    }
  }){

    const query = searchParams?.query || '';
    
    return(

        <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className={`${lusitana.className} text-2xl text-black dark:text-white`}>Jugadores</h1>
            </div>
            <div className="mt-4 mb-4 flex items-center justify-between gap-2 md:mt-8">
              <Search placeholder="Buscar jugadores..." />
              {/* <CreateProduct /> */}
            </div>
            
              <PlayersTable 
              query={query} 
            //   currentPage={currentPage} 
              />
            
          {/* <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div> */}
            
        </div>
        
    )
}