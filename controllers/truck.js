const db = require("../models");
const res = require("express/lib/response");
const { body, validationResult } = require('express-validator/check')

const validate = (method) => {
    switch (method) {
      case 'createTruck': {
       return [ 
          body('plate_number', 'plate_number doesnt exists').exists(),
          body('license_type', 'license_type doesnt exists').exists(),
          body('truck_type', 'truck_type doesnt exists').exists(),
          body('production_year', 'product_year doesnt exists').exists(),
          body('stnk', 'stnk doesnt exists').exists(),
          body('kir', 'kir doesnt exists').exists()
         ]   
      }
      case 'updateTruck': {
        return [ 
            body('plate_number', 'plate_number doesnt exists').exists(),
            body('license_type', 'license_type doesnt exists').exists(),
            body('truck_type', 'truck_type doesnt exists').exists(),
            body('production_year', 'product_year doesnt exists').exists(),
            body('stnk', 'stnk doesnt exists').exists(),
            body('kir', 'kir doesnt exists').exists(),
            body('status', 'status doesnt exists').exists()
           ]  
       }
    }
}

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
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.rest.badRequest(`Error : Body is not Valid`);   
        }

        db.Truck.create(req.body).then((result) => {
            res.rest.created("Truck has been added successfully")
        });
    } catch (error) {
        res.rest.badRequest(error.message)
    }
}

const updateTruck = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.rest.badRequest(`Error : Body is not Valid`);   
        }

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
    validate,
    listTrucks,
    detailTrucks,
    addTruck,
    updateTruck
}