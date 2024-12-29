import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

export default async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();
  // console.log("biro boi", getAllProducts);
  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
