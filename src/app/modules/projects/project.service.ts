import QueryBuilder from '../../builder/QueryBuilder';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async (query: Record<string, unknown>) => {
  const ProjectQuery = new QueryBuilder(Project.find(), query)
    .search(['title', 'description'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ProjectQuery.modelQuery;
  return result;
};

const getSingleProjectsFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProjectsIntoDB = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProjectsFromDB = async (id: string) => {
  const result = await Project.findByIdAndDelete(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectsFromDB,
  updateProjectsIntoDB,
  deleteProjectsFromDB,
};
