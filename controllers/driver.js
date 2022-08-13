const db = require("../models");
const res = require("express/lib/response");
const { body, validationResult } = require('express-validator')

const validate = (method) => {
    switch (method) {
      case 'createDriver': {
       return [ 
          body('name', 'Name doesnt exists').exists(),
          body('phone', 'Phone doesnt exists').exists(),
          body('id_card', 'id_card doesnt exists').exists(),
          body('license', 'license doesnt exists').exists()
         ]   
      }
      case 'updateDriver': {
        return [ 
            body('name', 'Name doesnt exists').exists(),
            body('phone', 'Phone doesnt exists').exists(),
            body('id_card', 'IDCard doesnt exists').exists(),
            body('license', 'License doesnt exists').exists(),
            body('status', 'Status doesnt exists').exists()
          ]   
       }
    }
}

const listDrivers = async (req, res) => {
    try {
        const data = await db.Driver.findAll();
        res.rest.success({ data: data });
    } catch (error) {
        console.log(error);
        return res.rest.serverError(error.message)
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
        return res.rest.serverError(error.message)
    }
}

const createDriver = async(req, res)=> {
    try{
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.rest.badRequest(`Error : Body is not Valid`);   
        }

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
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.rest.badRequest(`Error : Body is not Valid`);   
        }

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

module.exports = { validate, listDrivers, detailDriver, createDriver, updateDriver }