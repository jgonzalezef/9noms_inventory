import express, {Application, Request, Response} from "express";
import morgan from "morgan";

import dotenv from 'dotenv';
import {Signale} from "signale";

const app:Application = express();
const signale = new Signale();

dotenv.config();

app.use(morgan('dev'));
const PORT = process.env.PORT || 3001;
const INVENTORY = process.env.SERVICE_NAME;

app.use('/',(req:Request,res:Response) => {
    res.status(200).json({
        message:"Welcome to inventory service",
        products:[
            {
                id:"30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                name:"Laptop Thin & Light Huawei MateBook D 16",
                price:440
            },
            {
                id:"30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                name:"Apple 2021 MacBook Pro (de 16 Pulgadas, Chip M1 Pro CPU",
                price:378
            },
            {
                id:"30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                name:"ASUS Nuevo Zenbook 14 pulgadas 2.8K (2880 x 1800) 90Hz OLED",
                price:890
            },
        ]
    });
});

app.listen(PORT, () => {
    signale.success(`Servicio de ${INVENTORY} corriendo en http://localhost:${PORT}`);
});