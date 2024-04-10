import projectModel from "../models/project";

import expressAsyncHandler from "express-async-handler";

const projects_all = expressAsyncHandler(async (req, res, next) => {
    const allProjects = await projectModel.find({}).sort({ order: -1 })
        .exec();

    const responseObject = {
        responseStatus: 'validRequest',
        projects: allProjects
    }
    return res.json(responseObject);
});

export { projects_all }