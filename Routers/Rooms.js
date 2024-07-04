import express from "express";
import { Bookingaroom, create, customerhistory, get, getcustomerbookeddetails } from "../Controller/Room.js";

const router=express.Router();

router.post("/create",create);
router.get("/get",get);
router.get("/getcustomerbookeddetails",getcustomerbookeddetails);
router.get("/getcustomerhistory",customerhistory)
router.post("/Bookingaroom",Bookingaroom);

export default router;