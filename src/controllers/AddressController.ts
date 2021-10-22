import { Request, Response } from "express";
import { AddressModel } from "../database/models/AddressModel";

class AddressController{
    async create(req:Request,res:Response) {
        const{address, number, cep, state, country} = req.body;
        const user = await AddressModel.create({
            address,
            number,
            cep,
            state,
            country        
        });
        return res.status(201).json(user);
    }
    // async findAll(req:Request,res:Response) {}
    // async findOne(req:Request,res:Response) {}
    // async update(req:Request,res:Response) {}
    // async destroy(req:Request,res:Response) {}
}

export default new AddressController();