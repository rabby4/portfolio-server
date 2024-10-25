import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

// create Blog information
const createBlog = catchAsync(async (req, res) => {
  const data = {
    ...JSON.parse(req.body.data),
    image: req.file?.path,
  };
  const result = await BlogServices.createBlogIntoDB(data);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog Created successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogsFromDB(req.query);

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
    message: 'Blogs retrieved successfully',
    data: result,
  });
});

const getSingleBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlogsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Successfully retrieved single Blog',
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogsIntoDB(id, req.body);

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
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlogsFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlogs,
  updateBlog,
  deleteBlog,
};
