import serviceService from "../services/service-service.js";


const getAllServices = async (req, res, next) => {
    try {
        const result = await serviceService.getAllServices();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const getServicesByBranch = async (req, res, next) => {
    try {
        const result = await serviceService.getServicesByBranch(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createServices = async (req, res, next) => {
    try {
        const result = await serviceService.createServices(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateService = async (req, res, next) => {
    try {
        const result = await serviceService.updateService(req.params.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteService = async (req, res, next) => {
    try {
        const result = await serviceService.deleteService(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    getAllServices,
    getServicesByBranch,
    createServices,
    updateService,
    deleteService
}