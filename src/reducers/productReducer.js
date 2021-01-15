export default function (state = [], action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return (state = action.payload.map((product) => ({
        ...product,
        compare: false,
      })));
    case "COMPARE_PRODUCT":
      return state.map((product) =>
        product.id === action.product.id
          ? { ...product, compare: !product.compare }
          : product
      );
    default:
      return state;
  }
}
