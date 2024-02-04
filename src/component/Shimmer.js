const Shimmer = () => {
    return(
        <div className="Resturent-list">
         {Array(10).fill("").map((e , index) => (<div key= {index} className="Shimmer-card"></div> ))}
        
        </div> 
    )
}

export default Shimmer;