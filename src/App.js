import Card from "./Components/Card";
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer";

function App() {
  return (
    <div className="wrapper clear">
      
        <CartDrawer/>
      
      <Header/>
      
      <div className="content p-40">
        {/*--------------------------------------------------------------------------------------------search-block*/}
        <div className="d-flex align-center justify-between mb-40">
          <h1 >All coupons</h1>
          <div className="search-block d-flex align-center justify-between">
            <img className="search-png" width={25} height={25} src="/img/search.png" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        {/*----------------------------------------------------------------------------------------------------card */}

        <div className="d-flex">
        <Card />
          {/* <div className="card">
            <img width={133} height={133} src="/img/food1.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100$</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus" />
              </button>
            </div>

          </div>
          <div className="card">
            <img width={133} height={133} src="/img/food2.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100$</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus" />
              </button>
            </div>

          </div>
          <div className="card">
            <img width={133} height={133} src="/img/food3.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100$</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="Plus" />
              </button>
            </div>

          </div>
          <div className="card">
            <img width={133} height={133} src="/img/food4.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>100$</b>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div> */}
        </div>
        {/*-----------------------------------------------------------------------------------------------end card */}
      </div>
    </div>
  );
}

export default App;
