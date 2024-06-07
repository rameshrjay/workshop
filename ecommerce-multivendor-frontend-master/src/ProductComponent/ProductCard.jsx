// import { Link } from "react-router-dom";
// import CategoryNavigator from "../CategoryComponent/CategoryNavigator";

// const ProductCard = (product) => {
//   const { id, name, description, category, price, image1 } =product.item;
//   console.log(product.item);
//   const descriptionToShow = (description, maxLength) => {
//     if (description.length <= maxLength) {
//       return description;
//     } else {
//       const truncatedText = description.substring(0, maxLength);
//       return truncatedText + "...";
//     }
//   };

//   return (
//     <div className="col">
//       <div className="card product-card rounded-card custom-bg h-100 shadow-lg">
//         <img
//           src={"http://localhost:8080/api/product/" + product.item.image1}
//           className="card-img-top img-fluid rounded"
//           alt="img"
//           style={{
//             maxHeight: "300px", // Adjust the maximum height as needed
//             width: "auto",
//             margin: "0 auto",
//           }}
//         />

//         <div className="card-body text-color">
//           <h5>
//             Category:{" "}
//             <CategoryNavigator
//               item={{
//                 id: product.item.category.id,
//                 name: product.item.category.name,
//               }}
//             />
//           </h5>
//           <h5 className="card-title d-flex justify-content-between">
//             <div>
//               <b>{product.item.name}</b>
//             </div>
//           </h5>
//           <p className="card-text">
//             <b>{descriptionToShow(product.item.description, 50)}</b>
//           </p>
//         </div>
//         <div className="card-footer">
//           <div className="d-flex justify-content-between mt-2">
//             <Link
//               to={`/product/${product.item.id}/category/${product.item.category.id}`}
//               className="btn bg-color custom-bg-text"
//             >
//               Add to Cart
//             </Link>

//             <div className="text-color">
        
//                 <span>
//                   <h4>Price : &#8377;{product.item.price}</h4>
//                 </span>
             
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import { Link } from "react-router-dom";
import CategoryNavigator from "../CategoryComponent/CategoryNavigator";

const ProductCard = ( product ) => {
  // Check if product and product.item are not null
  if (!product || !product.item) {
    return null; // Return null if product or product.item is null
  }

  // Destructure product item
  const { id, name, description, category, price, image1 } = product.item;

  // Check if category exists before accessing its properties
  const categoryName = category ? category.name : "No Category";
  const categoryId = category ? category.id : null;

  // Function to truncate description
  const descriptionToShow = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      const truncatedText = description.substring(0, maxLength);
      return truncatedText + "...";
    }
  };

  return (
    <div className="col">
      <div className="card product-card rounded-card custom-bg h-100 shadow-lg">
        <img
          src={`http://localhost:8080/api/product/${image1}`}
          className="card-img-top img-fluid rounded"
          alt="img"
          style={{
            maxHeight: "300px", // Adjust the maximum height as needed
            width: "auto",
            margin: "0 auto",
          }}
        />

        <div className="card-body text-color">
          <h5>
            Category:{" "}
            <CategoryNavigator
              item={{
                id: categoryId,
                name: categoryName,
              }}
            />
          </h5>
          <h5 className="card-title d-flex justify-content-between">
            <div>
              <b>{name}</b>
            </div>
          </h5>
          <p className="card-text">
            <b>{descriptionToShow(description, 50)}</b>
          </p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between mt-2">
            <Link
              to={`/product/${id}/category/${categoryId}`}
              className="btn bg-color custom-bg-text"
            >
              Add to Cart
            </Link>

            <div className="text-color">
              <span>
                <h4>Price : &#8377;{price}</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;






