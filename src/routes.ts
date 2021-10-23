import express from "express";
import UserController from "./controllers/UserController";
import AddressController from "./controllers/AddressController";

const router = express.Router();

router.post("/address", AddressController.create);
router.get("/address", AddressController.findAll);
router.get("/address/:addressId", AddressController.findOne);
router.put("/address/:addressId", AddressController.update);
router.delete("/address/:addressId", AddressController.destroy);

router.post("/users", UserController.create);
router.get("/users", UserController.findAll);
router.get("/users/:userId", UserController.findOne);
router.put("/users/:userId", UserController.update);
router.delete("/users/:userId", UserController.destroy);

export {router};