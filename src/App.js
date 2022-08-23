
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/bag.png" alt="" />
          <div >
            <h3 className="text-uppercase">React food</h3>
            <p className="opacity-5">Best food shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={17} height={17} src="/img/shopping4.png" alt="" />
            <span>100 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/client3.png" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All coupons</h1>

        {/*----------------------------------------------------------------------------------------------------card */}

        <div className="d-flex">
          <div className="card">
            <img width={133} height={133} src="/img/food.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <p>100$</p>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div>

          <div className="card">
            <img width={133} height={133} src="/img/food1.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <p>100$</p>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div>

          <div className="card">
            <img width={133} height={133} src="/img/food2.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <p>100$</p>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div>

          <div className="card">
            <img width={133} height={133} src="/img/food3.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <p>100$</p>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div>


          <div className="card">
            <img width={133} height={133} src="/img/food4.png" alt="Food" />
            <h5>Vegetarian food</h5>
            <div className="d-flex justify-between align-centr">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <p>100$</p>
              </div>
              <button className="button">
                <img width={18} height={18} src="/img/plus.png" alt="" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
