const db = require("../models");
const res = require("express/lib/response");

const listTrucks = async (req, res) => {
    try {
        const data = await db.Truck.findAll();
        res.rest.success({ data: data });
    } catch (error) {
        console.log(error);
        return res.rest.serverError({message: error})
    }
}

const detailTrucks = async (req, res) => {
    try {
        let { id } = req.params;

        const data = await db.Truck.findOne({
            where: { id: id },
        })

        if (!data) return res.rest.badRequest(`Can't find truck with ID ${id}.`);
        res.rest.success({ data: data });
    } catch (error) {
        return res.rest.serverError('Internal Server Error')
    }
}

module.exports = {
    listTrucks,
    detailTrucks
}