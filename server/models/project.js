import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    preview_link: { type: String, required: true },
    github_link: { type: String, required: true },
    image: { type: String, required: true },
    order: { type: Number, required: true },
});

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;