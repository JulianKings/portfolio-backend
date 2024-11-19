import projectModel from "../models/project";

import expressAsyncHandler from "express-async-handler";

const projects_all = expressAsyncHandler(async (req, res, next) => {
    const allProjects = await projectModel.find({}).sort({ order: 1 })
        .exec();

    const responseObject = {
        responseStatus: 'validRequest',
        projects: allProjects
    }
    return res.json(responseObject);
});

const projects_extra = expressAsyncHandler(async (req, res, next) => {
    const responseObject = [
        {
            "id": 1,
            "nombre": "Broker 1",
            "pais": "España"
        },
        {
            "id": 2,
            "nombre": "Broker 2",
            "pais": "Francia"
        },
        {
            "id": 3,
            "nombre": "Broker 3",
            "pais": "Alemania"
        },
    ]
    return res.json(responseObject);
});

export { projects_all, projects_extra };