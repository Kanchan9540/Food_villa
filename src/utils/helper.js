
export function filterData(searchInput , Resturants){
    const filteredData =  Resturants.filter((Resturant) =>
    Resturant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
     )
     return filteredData;
 };

 