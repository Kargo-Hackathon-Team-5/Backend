const db = require("../models");
const res = require("express/lib/response");

const listTrucks = async (req, res) => {
    try {
        const data = await db.Truck.findAll();
        res.rest.success({ data: data })
    } catch (error) {
        return res.rest.serverError({message: error})
    }
}

const detailTrucks = async (req, res) => {
    try {
        let { id } = req.params

        const data = await db.Truck.findOne({
            where: { id: id },
        })

        if (!data) return res.rest.badRequest(`Can't find truck with ID ${id}.`)
        res.rest.success({ data: data });
    } catch (error) {
        return res.rest.serverError('Internal Server Error')
    }
}

const addTruck = async (req, res) => {
    try {
        db.Truck.create(req.body).then((result) => {
            res.rest.success("Truck has been added successfully")
        });
    } catch (error) {
        res.rest.badRequest(error)
    }
}

const updateTruck = async (req, res) => {
    try {
        let { id } = req.params
        
        db.Truck.update(req.body, { where: { id: id } }).then(() => {
            res.rest.success("Truck has been updated successfully");
        })
    } catch (error) {
        res.rest.badRequest(error)
    }
}

module.exports = {
    listTrucks,
    detailTrucks,
    addTruck,
    updateTruck
}