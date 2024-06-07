import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeliveryHeader = () => {
  let navigate = useNavigate();

  // const user = JSON.parse(sessionStorage.getItem("active-delivery"));
  

  const deliveryLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-delivery");
    sessionStorage.removeItem("delivery-jwtToken");
    window.location.reload(true);
    setTimeout(() => {
      navigate("/home");
    }, 3000); // Redirect after 3 seconds
  };
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/delivery-person/order/all"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">My Delivery Orders</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to=""
          className="nav-link active"
          aria-current="page"
          onClick={deliveryLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default DeliveryHeader;
