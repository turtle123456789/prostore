
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
export const metadata = {
  title: "Home",
}
const Home = async() => {
  const latestProducts = await getLatestProducts()
  return (
    <div>
      <ProductList  data={latestProducts} title="Product " limit={5} />
    </div>
  );
}
export default Home