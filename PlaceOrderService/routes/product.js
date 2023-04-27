import { Router } from "express";
const paymentRoute = Router();
import paymentController from "../controllers/payment.js";
paymentRoute.post(
    "/api/payment/create",
    paymentController.createPayment
  );
  // productRoute.get(
  //   "/api/product/getAll",
  //   productController.getProducts
  // );
  // productRoute.get(
  //   "/api/product/get/:id",
  //   paymentController.getOneProduct
  // );
  // productRoute.put(
  //   "/api/Product/update/:id",
  //   productController.updateProduct
  // );
  // productRoute.delete(
  //   "/api/Product/delete/:id",
  //   productController.deleteProduct
  // );
export default paymentRoute