console.log(Redux);



//actions

const addProduct =(product)=>{
  return {
    type:"products/addProduct",
    payload:product
  }
}
const getProduct = (products)=>{
  return {
    type:"products/getProducts",
    payload:products
  }
}

const fetchProducts = ()=>{
  return async(dispatch)=>{
    const res = await fetch("http://fakestoreapi.com/products")
    const data = await res.json();
    console.log(data)
    dispatch(getProduct(data))
  }
}


const productsReducer = (state = [],action)=>{
  switch(action.type){
    case "products/addProduct":
      return [...state,action.payload]
    case "products/getProducts":
      return [...state,...action.payload]
    default :
      return state
  }
}





const store = Redux.createStore(productsReducer,Redux.applyMiddleware(ReduxThunk));

store.dispatch(addProduct({id:1,title:"product one"}))
console.log(store.getState())

store.subscribe(()=>{
  store.getState().map((product)=>{
    let div = document.createElement("div")
    div.appendChild(document.createTextNode(product.title))
    document.body.append(div)
  })
})