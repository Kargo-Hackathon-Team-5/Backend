const db = require("../models");
const res = require("express/lib/response");

const listTrucks = async (req, res) => {
    try {
        const data = await db.Truck.findAll();
        res.rest.success({ data: data })
    } catch (error) {
        return res.rest.serverError(error.message)
    }
}

const detailTrucks = async (req, res) => {
    try {
        let { id } = req.params
        if(!id) res.rest.badRequest("ID parameter is empty");

        const data = await db.Truck.findOne({
            where: { id: id },
        })

        if (!data) return res.rest.badRequest(`Can't find truck with ID ${id}.`)
        res.rest.success({ data: data });
    } catch (error) {
        return res.rest.serverError(error.message)
    }
}

const addTruck = async (req, res) => {
    try {
        db.Truck.create(req.body).then((result) => {
            res.rest.success("Truck has been added successfully")
        });
    } catch (error) {
        res.rest.badRequest(error.message)
    }
}

const updateTruck = async (req, res) => {
    try {
        let { id } = req.params
        if(!id) res.rest.badRequest("ID parameter is empty");

        db.Truck.update(req.body, { where: { id: id } }).then(() => {
            res.rest.success("Truck has been updated successfully");
        })
    } catch (error) {
        res.rest.badRequest(error.message)
    }
}

module.exports = {
    listTrucks,
    detailTrucks,
    addTruck,
    updateTruck
}