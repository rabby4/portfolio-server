import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillServices } from './skill.service';

// create Skill information
const createSkill = catchAsync(async (req, res) => {
  const data = {
    ...JSON.parse(req.body.data),
    image: req.file?.path,
  };
  const result = await SkillServices.createSkillIntoDB(data);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill Created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillsFromDB();

  if (!result.length) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skills retrieved successfully',
    data: result,
  });
});

const getSingleSkills = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.getSingleSkillsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully retrieved single Skill',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.updateSkillsIntoDB(id, req.body);

  if (!result) {
    sendResponse(res, {
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillServices.deleteSkillsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSingleSkills,
  updateSkill,
  deleteSkill,
};
