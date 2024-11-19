import { brokers } from "../data/brokers";
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
    const responseObject = brokers;
    return res.json(responseObject);
});

const projects_extra_one = expressAsyncHandler(async (req, res, next) => {
    if(req.params.id) {
        const project = brokers.find(broker => broker.id === (+req.params.id));
        if(!project) {
            const responseObject = {
                responseStatus: 'invalidRequest',
                message: 'No se ha encontrado el proyecto'
            }
            return res.json(responseObject);
        } else {
            res.json(project); 
        }
    } else {
        const responseObject = {
            responseStatus: 'invalidRequest',
            message: 'No se ha encontrado el proyecto'
        }
        return res.json(responseObject);
    }
});

export { projects_all, projects_extra, projects_extra_one };