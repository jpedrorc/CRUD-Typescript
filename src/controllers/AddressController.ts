import { Request, Response } from "express";
import { AddressModel } from "../database/models/AddressModel";

class AddressController{
    async create(req:Request,res:Response) {
        const{address, number, cep, city, state, country} = req.body;
        const user = await AddressModel.create({
            address,
            number,
            cep,
            city,
            state,
            country        
        });
        return res.status(201).json(user);
    }
    async findAll(req:Request,res:Response) {
        const address = await AddressModel.findAll();
        return address.length> 0 
        ? res.status(200).json(address)
        : res.status(204).send("Nenhum endereço cadastrado!")
    }
    async findOne(req:Request,res:Response) {
        const{addressId} = req.params;
        const address = await AddressModel.findOne({
            where:{
                id: addressId
            }
        })
        return address
        ? res.status(200).json(address)
        : res.status(204).send("Endereço não cadastrado!")
    }
    async update(req:Request,res:Response) {
        const {addressId} = req.params;
        const newData = await AddressModel.update(req.body,{where:{id:addressId}});
        return newData
        ? res.status(204).send(`Feita alteração de ${req.body}`)
        : res.status(404).send("Enrdereço não encontrado!");
    }
    async destroy(req:Request,res:Response) {
        const {addressId} = req.params;
        await AddressModel.destroy({where: { id:addressId}});
        return res.status(204).send(`Registro Apagado com sucesso!`);
    }
}

export default new AddressController();