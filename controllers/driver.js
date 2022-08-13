const db = require("../models");
const res = require("express/lib/response");

const listDrivers = async (req, res) => {
    try {
        const data = await db.Driver.findAll();
        res.rest.success({ data: data });
    } catch (error) {
        console.log(error);
        return res.rest.serverError({message: error})
    }
}

const detailDriver = async (req, res) => {
    try {
        let { id } = req.params;

        const data = await db.Driver.findOne({
            where: { id: id },
        })

        if (!data) return res.rest.badRequest(`Can't find driver with ID ${id}.`);
        res.rest.success({ data: data });
    } catch (error) {
        return res.rest.serverError('Internal Server Error')
    }
}

const createDriver = async(req, res)=> {
    try{
        const savedDriver = await db.Driver.create(req.body);
        res.rest.success({data: savedDriver});
    }catch(error){
        res.rest.serverError(error.message);
    }
}

const updateDriver = async(req, res) => {
    let { id } = req.params;

    if(!id) res.rest.badRequest("ID parameter is empty");
    console.log(id)
    try{
        const updatedDriver = await db.Driver.update(req.body, {
            where: {
                id: id
            }
        });
        res.rest.success({message : "Successfully Updating Driver"})
    }catch(error){
        res.rest.serverError(error.message);
    }
}

module.exports = { listDrivers, detailDriver, createDriver, updateDriver}