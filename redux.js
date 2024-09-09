console.log(Redux);

const addProduct = (product) => {
  return {
    type: "products/addProduct",
    payload: product,
  };
};

const getProducts = (products) => {
  return {
    type: "products/getProducts",
    payload: products,
  };
};

const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    dispatch(getProducts(data));
  };
};

const productsReducers = (state = [], action) => {
  switch (action.type) {
    case "products/addProduct":
      if (action.payload.id == 0) return state;
      return [...state, action.payload];
    case "products/getProducts":
      return [...state,...action.payload]
    default:
      return state;
  }
};

const store = Redux.createStore(
  productsReducers,
  Redux.applyMiddleware(ReduxThunk)
);

store.dispatch(addProduct({ id: 1, title: "product 1" }));
store.dispatch({
  type: "products/addProduct",
  payload: { id: 2, title: "product 2" },
});
store.dispatch({
  type: "products/addProduct",
  payload: { id: 3, title: "product 3" },
});
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
