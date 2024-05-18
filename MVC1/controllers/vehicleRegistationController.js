const VehicleRegistration = require('../models/VehicleRegistation');

// Controller function to handle vehicle registration creation
const createVehicleRegistration = async (req, res) => {
    try {
        const newVehicleRegistration = await VehicleRegistration.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                vehicleRegistration: newVehicleRegistration
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to handle fetching all vehicle registrations
const getAllVehicleRegistrations = async (req, res) => {
    try {
        const vehicleRegistrations = await VehicleRegistration.find();
        res.status(200).json({
            status: 'success',
            results: vehicleRegistrations.length,
            data: {
                vehicleRegistrations
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Controller function to handle fetching a single vehicle registration by ID
const getVehicleRegistrationById = async (req, res) => {
    try {
        const vehicleRegistration = await VehicleRegistration.findById(req.params.id);
        if (!vehicleRegistration) {
            return res.status(404).json({
                status: 'fail',
                message: 'Vehicle registration not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                vehicleRegistration
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};

// Controller function to handle updating a vehicle registration by ID
const updateVehicleRegistration = async (req, res) => {
    try {
        const updatedVehicleRegistration = await VehicleRegistration.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedVehicleRegistration) {
            return res.status(404).json({
                status: 'fail',
                message: 'Vehicle registration not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                vehicleRegistration: updatedVehicleRegistration
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Controller function to handle deleting a vehicle registration by ID
const deleteVehicleRegistration = async (req, res) => {
    try {
        const deletedVehicleRegistration = await VehicleRegistration.findByIdAndDelete(req.params.id);
        if (!deletedVehicleRegistration) {
            return res.status(404).json({
                status: 'fail',
                message: 'Vehicle registration not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
};




const createOwner = async (req, res) => {
    try {
        const owner = new Owner(req.body);
        await owner.save();
        res.status(201).send(owner);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getOwners = async (req, res) => {
    try {
        const owners = await Owner.find({});
        res.status(200).send(owners);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getOwnerById = async (req, res) => {
    try {
        const owner = await Owner.findById(req.params.id);
        if (!owner) {
            return res.status(404).send();
        }
        res.status(200).send(owner);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateOwner = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!owner) {
            return res.status(404).send();
        }
        res.status(200).send(owner);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteOwner = async (req, res) => {
    try {
        const owner = await Owner.findByIdAndDelete(req.params.id);
        if (!owner) {
            return res.status(404).send();
        }
        res.status(200).send(owner);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Broker Controller
const createBroker = async (req, res) => {
    try {
        const broker = new Broker(req.body);
        await broker.save();
        res.status(201).send(broker);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getBrokers = async (req, res) => {
    try {
        const brokers = await Broker.find({});
        res.status(200).send(brokers);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getBrokerById = async (req, res) => {
    try {
        const broker = await Broker.findById(req.params.id);
        if (!broker) {
            return res.status(404).send();
        }
        res.status(200).send(broker);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateBroker = async (req, res) => {
    try {
        const broker = await Broker.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!broker) {
            return res.status(404).send();
        }
        res.status(200).send(broker);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteBroker = async (req, res) => {
    try {
        const broker = await Broker.findByIdAndDelete(req.params.id);
        if (!broker) {
            return res.status(404).send();
        }
        res.status(200).send(broker);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {createVehicleRegistration, getAllVehicleRegistrations, getVehicleRegistrationById, updateVehicleRegistration, deleteVehicleRegistration,  createOwner,
    getOwners,
    getOwnerById,
    updateOwner,
    deleteOwner,
    createBroker,
    getBrokers,
    getBrokerById,
    updateBroker,
    deleteBroker };