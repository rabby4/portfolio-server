import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();
  return result;
};

const getSingleSkillsFromDB = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

const updateSkillsIntoDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSkillsFromDB = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const SkillServices = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSingleSkillsFromDB,
  updateSkillsIntoDB,
  deleteSkillsFromDB,
};
