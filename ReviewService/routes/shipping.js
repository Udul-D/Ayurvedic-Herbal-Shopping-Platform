import { Router } from "express";
const shippingRoute = Router();
import shippingController from "../controllers/shipping.js";
shippingRoute.post(
    "/api/shipping/create",
    shippingController.createShipping
  );
  // productRoute.get(
  //   "/api/product/getAll",
  //   productController.getProducts
  // );
  shippingRoute.get(
    "/api/shipping/get/:id",
    shippingController.getOneShipping
  );
  // productRoute.put(
  //   "/api/Product/update/:id",
  //   productController.updateProduct
  // );
  // productRoute.delete(
  //   "/api/Product/delete/:id",
  //   productController.deleteProduct
  // );
export default shippingRoute