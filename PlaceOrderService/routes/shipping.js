import { Router } from "express";
const shippingRoute = Router();
import shippingController from "../controllers/shipping.js";
shippingRoute.post(
    "/api/shipping/create",
    shippingController.createShipping
  );
  shippingRoute.get(
    "/api/product/getAll",
    shippingController.getShippings
  );
  shippingRoute.get(
    "/api/shipping/get/:id",
    shippingController.getOneShipping
  );
  
  shippingRoute.put(
    "/api/shipping/update/:id",
    shippingController.updateShipping,
  );
  shippingRoute.delete(
    "/api/Product/delete/:id",
    shippingController.deleteShipping
  );
export default shippingRoute