// Express routes

const express=require("express");
const router=express.Router()
const { createConnector, getConnectors, updateConnector, deleteConnector } = require("../controllers/connectorController");

const clerkAuth=require("../middleware/clerkAuth");

// router.use(clerkAuth);

router.post("/", createConnector);
router.get("/", getConnectors);
router.put("/:id", updateConnector);
router.delete("/:id", deleteConnector);

module.exports=router;