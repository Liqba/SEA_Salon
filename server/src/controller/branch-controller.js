import branchService from "../services/branch-service.js";


const getAllBranches = async (req, res, next) => {
    try {
        const result = await branchService.getAll();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const getBranchById = async (req, res, next) => {
    try {
        const result = await branchService.getBranchById(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const createBranch = async (req, res, next) => {
    try {
        const result = await branchService.createBranch(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const updateBranch = async (req, res, next) => {
    try {
        const result = await branchService.updateBranch(req.params.id, req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const deleteBranch = async (req, res, next) => {
    try {
        const result = await branchService.deleteBranch(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


export default {
    getAllBranches,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
}