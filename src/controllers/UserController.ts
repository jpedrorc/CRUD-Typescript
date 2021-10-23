import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";

class UserController{
    async create(req:Request,res:Response) {
        const{email, name, age, telephone} = req.body;
        const user = await UserModel.create({
            email,
            name,
            age,
            telephone
        });
        return res.status(201).json(user);
    }
    async findAll(req:Request,res:Response) {
        const users = await UserModel.findAll();
        return users.length > 0 
        ? res.status(200).json(users)
        : res.status(204).send("Nenhum usuário cadastrado");
    }
    async findOne(req:Request,res:Response) {
        const {userId} = req.params;
        const user = await UserModel.findOne({
            where:{
                id: userId,
            },
        });
        return user 
        ? res.status(200).json(user) 
        : res.status(404).send("Usuario não encontrado!");
    }
    async update(req:Request,res:Response) {
        const {userId} = req.params;
        const newData = await UserModel.update(req.body,{where:{id:userId}});
        return newData
        ? res.status(204).send(`Feita alteração de ${req.body}`)
        : res.status(404).send("Usuario não encontrado!");
    }
    async destroy(req:Request,res:Response) {
        const {userId} = req.params;
        await UserModel.destroy({where: { id:userId}});
        return res.status(204).send(`Registro Apagado com sucesso!`);
    }
}

export default new UserController();