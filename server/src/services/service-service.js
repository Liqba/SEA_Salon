import { prismaClient } from "../application/database.js";

const getAllServices = async () => {
    return prismaClient.service.findMany();
}

const getServicesByBranch = async (branchId) => {
    return prismaClient.service.findMany({
        where: {
            branchId: branchId
        }
    })
}

const createServices = async (service) => {
    return prismaClient.service.create({
        data: service
    })
}


const updateService = async (serviceId, service) => {
    await prismaClient.service.update({
        where: {
            id: serviceId
        },
        data: service
    })

    return "success"
}

const deleteService = async (id) => {
    await prismaClient.service.delete({
        where: {
            id: id
        }
    })

    return "success"
}

export default {
    getAllServices,
    getServicesByBranch,
    createServices,
    updateService,
    deleteService
}