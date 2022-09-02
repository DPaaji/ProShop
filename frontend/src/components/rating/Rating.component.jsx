const Reviews = ({product}) => {
    return ( 
        <> 
    <span style={{color: "gray"}}>
    <i className={`${product.rating >= 1 ? "fa-solid fa-star" : "fa-regular fa-star"}
     ${product.rating === 0.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star" }`}>
    </i>
     </span>
      <span style={{color: "gray"}}>
      <i className={`${product.rating >= 2 ? "fa-solid fa-star" : "fa-regular fa-star"}
       ${product.rating === 1.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star" }`}>
      </i>
       </span>  
        <span style={{color: "gray"}}>
        <i className={`${product.rating >= 3 ? "fa-solid fa-star" : "fa-regular fa-star"}
         ${product.rating === 2.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star" }`}>
        </i>
         </span>  
          <span style={{color: "gray"}}>
          <i className={`${product.rating >= 4 ? "fa-solid fa-star" : "fa-regular fa-star"}
           ${product.rating === 3.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star" }`}>
          </i>
           </span>  
            <span style={{color: "gray"}}>
            <i className={`${product.rating >= 5 ? "fa-solid fa-star" : "fa-regular fa-star"}
             ${product.rating === 4.5 ? "fa-regular fa-star-half-stroke" : "fa-regular fa-star" }`}>
            </i>
             </span>  
             </>    
    );
}
 
export default Reviews;