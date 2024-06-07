import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import GetProductReviews from "../ReviewComponent/GetProductReviews";
import ProductCarousel from "./ProductCarousel";

const Product = () => {
  const { productId, categoryId } = useParams();

  let navigate = useNavigate();

  const customer_jwtToken = sessionStorage.getItem("customer-jwtToken");

  let user = JSON.parse(sessionStorage.getItem("active-customer"));

  const [quantity, setQuantity] = useState("");

  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({
    seller: {
      firstName: "",
    },
  });

  const retrieveProduct = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/fetch?productId=" + productId
    );

    return response.data;
  };

  useEffect(() => {
    const getProduct = async () => {
      const retrievedProduct = await retrieveProduct();

      setProduct(retrievedProduct.products[0]);
    };

    const getProductsByCategory = async () => {
      const allProducts = await retrieveProductsByCategory();
      if (allProducts) {
        setProducts(allProducts.products);
      }
    };

    getProduct();
    getProductsByCategory();
  }, [productId]);

  const retrieveProductsByCategory = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/product/fetch/category-wise?categoryId=" +
        categoryId
    );
    console.log(response.data);
    return response.data;
  };

  const saveProductToCart = (userId) => {
    fetch("http://localhost:8080/api/cart/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + customer_jwtToken,
      },
      body: JSON.stringify({
        quantity: quantity,
        userId: userId,
        productId: productId,
      }),
    }).then((result) => {
      result.json().then((res) => {
        if (res.success) {
          toast.success(res.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            navigate("/customer/cart");
          }, 2000); // Redirect after 3 seconds
        } else if (!res.success) {
          toast.error(res.responseMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000); // Redirect after 3 seconds
        } else {
          toast.error("It Seems Server is down!!!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.reload(true);
          }, 2000); // Redirect after 3 seconds
        }
      });
    });
  };

  const addToCart = (e) => {
    e.preventDefault();
    if (user == null) {
      alert("Please login to buy the products!!!");
     } else if (quantity <= 0) { // Check if quantity is less than or equal to 0
      toast.error("Please enter a positive quantity!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }else if (product.quantity < 1) {
      toast.error("Product Out Of Stock !!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    } else {
      saveProductToCart(user.id);
      setQuantity("");
    }
  };

  const navigateToAddReviewPage = () => {
    navigate("/product/" + product.id + "/review/add", { state: product });
  };

  const sellerProductPage = () => {
    console.log(product.seller.firstName);
    navigate(
      `/product/seller/${product.seller.id}/${product.seller.firstName}`,
      {
        state: product.seller,
      }
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 mt-2 admin">
          <div className="card form-card custom-bg shadow-lg">
            <ProductCarousel
              item={{
                image1: product.image1,
                image2: product.image2,
                image3: product.image3,
              }}
            />
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <div className="card form-card custom-bg shadow-lg">
            <div
              className="card-header bg-color custom-bg-text "
              style={{
                borderRadius: "1em",
                height: "50px",
              }}
            >
              <h3 className="card-title">{product.name}</h3>
            </div>

            <div className="card-body text-left text-color">
              <div className="text-left mt-3">
                <h3>Description :</h3>
              </div>
              <h4 className="card-text">{product.description}</h4>
            </div>

            <div className="card-body text-left text-color">
              <div className="text-left mt-3">
                <h3>Seller Details:</h3>
              </div>

              <div className="d-flex justify-content-left">
                <h4 className="card-text">
                  <b className="text-color" onClick={sellerProductPage}>
                    Name: {product.seller.firstName + " "}
                  </b>
                </h4>
                <h4 className="card-text ms-4">
                  Contact: {product.seller.emailId + " "}
                </h4>
              </div>
            </div>

            <div className="card-footer custom-bg">
              <div className="text-center text-color">
                
                  <span>
                    <h4>Price : &#8377;{product.price}</h4>
                  </span>
              
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <form className="row g-3" onSubmit={addToCart}>
                    <div className="col-auto">
                      <input
                        type="number"
                        className="form-control"
                        id="addToCart"
                        placeholder="Enter Quantity..."
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                      />
                    </div>
                    <div className="col-auto">
                      <input
                        type="submit"
                        className="btn bg-color custom-bg-text mb-3"
                        value="Add to Cart"
                      />
                      <ToastContainer />
                    </div>
                  </form>
                </div>

                <p className="ml-2 text-color">
                  {(() => {
                    if (product.quantity > 0) {
                      return <b>Stock : {product.quantity}</b>;
                    } else {
                      return (
                        <b className="text-danger">Stock : Out Of Stock!!!</b>
                      );
                    }
                  })()}
                </p>
              </div>

              {(() => {
                if (user) {
                  return (
                    <div>
                      <input
                        type="submit"
                        className="btn bg-color custom-bg-text mb-3"
                        value="Add Review"
                        onClick={navigateToAddReviewPage}
                      />
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>

        <div className="col-sm-3 mt-2 admin">
          <GetProductReviews />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-12">
          <h2>Related Products:</h2>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {products.map((product) => {
              return <ProductCard key={product.id} item={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
