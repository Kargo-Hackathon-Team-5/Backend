const db = require("../models");
const res = require("express/lib/response");
const Driver = db.Driver;
const Truck = db.Truck;

const listShipments = async (req, res) => {
    try {
        relations = [
            {
                model: Driver,
                as: 'driver',
                attributes: {exclude: ['status', 'createdAt', 'updatedAt']}
            }
        ]

        const data = await db.Shipment.findAll({
            include: relations
        });

        res.rest.success({ data: data });
    } catch (error) {
        console.log(error);
        return res.rest.serverError({message: error})
    }
}

const detailShipment = async (req, res) => {
    try {
        let { id } = req.params;

        relations = [
            {
                model: Driver,
                as: 'driver',
                attributes: {exclude: ['status', 'createdAt', 'updatedAt']}
            },
            {
                model: Truck,
                as: 'truck',
                attributes: {exclude: ['createdAt', 'updatedAt']}
            }
        ]

        const data = await db.Shipment.findOne({
            where: { id: id },
            include: relations
        })

        if (!data) return res.rest.badRequest(`Can't find truck with ID ${id}.`);
        res.rest.success({ data: data });
    } catch (error) {
        return res.rest.serverError(error.message)
    }
}

const createShipment = async(req, res)=> {
    try{
        const savedDriver = await db.Shipment.create(req.body);
        res.rest.created({data: savedDriver});
    }catch(error){
        res.rest.serverError(error.message);
    }
}

const updateShipment = async(req, res) => {
    let { id } = req.params;

    if(!id) res.rest.badRequest("ID parameter is empty");
    
    try{
        await db.Shipment.update(req.body, {
            where: {
                id: id
            }
        });

        res.rest.success({ message : "Successfully Updating Shipment" })
    }catch(error){
        res.rest.serverError(error.message);
    }
}

module.exports = {listShipments, detailShipment, createShipment, updateShipment}