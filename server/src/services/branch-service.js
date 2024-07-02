import { prismaClient } from "../application/database.js";
import { validate } from "../validation/validation.js";
import { createBranchValidation } from "../validation/branch-validation.js";



const getAll = async () => {
    return prismaClient.branch.findMany();
}

const getBranchById = async (id) => {
    return prismaClient.branch.findUnique({
        where: {
            id: id
        }
    })
}

const createBranch = async (data) => {
    const branch = validate(createBranchValidation, data);

    return prismaClient.branch.create({
        data: branch
    })
}

const updateBranch = async (branchId, data) => {
    await prismaClient.branch.update({
        where: {
            id: branchId
        },
        data: data
    })

    return "success"
}

const deleteBranch = async (branchId) => {
    await prismaClient.branch.delete({
        where: {
            id: branchId
        }
    })

    return "success"
}


export default {
    getAll,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
}