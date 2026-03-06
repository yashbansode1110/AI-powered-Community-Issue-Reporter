const Issue = require('../models/Issue');
const cloudinary = require('../config/cloudinary');

const createIssue = async (req, res) => {
  try {
    const { title, description, category, imageUrl, location } = req.body;
    const locationObj = typeof location === 'string' ? JSON.parse(location) : location;

    if (!title?.trim() || !description?.trim() || !category?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, and category are required',
      });
    }

    if (!locationObj?.latitude || !locationObj?.longitude) {
      return res.status(400).json({
        success: false,
        message: 'Location with latitude and longitude is required',
      });
    }

    let imageUrlToStore = imageUrl || null;

    if (req.file) {
      try {
        const uploadResult = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'issues' },
            (err, result) => {
              if (err) reject(err);
              else resolve(result);
            }
          );
          uploadStream.end(req.file.buffer);
        });
        imageUrlToStore = uploadResult.secure_url;
      } catch (uploadError) {
        return res.status(500).json({
          success: false,
          message: 'Image upload failed. Please try again.',
        });
      }
    }

    const issue = await Issue.create({
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      imageUrl: imageUrlToStore,
      location: {
        latitude: locationObj.latitude,
        longitude: locationObj.longitude,
      },
      statusHistory: [{ status: 'Reported', date: new Date() }],
      reportedBy: req.user.userId,
    });

    const populated = await Issue.findById(issue._id).populate('reportedBy', 'name email');
    res.status(201).json({
      success: true,
      message: 'Issue created successfully',
      data: populated,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    if (error.name === 'SyntaxError' && error.message.includes('JSON')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid location format',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Failed to create issue',
    });
  }
};

const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate('reportedBy', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: issues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch issues',
    });
  }
};

const getIssueById = async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findById(id).populate('reportedBy', 'name email');

    if (!issue) {
      return res.status(404).json({
        success: false,
        message: 'Issue not found',
      });
    }

    res.status(200).json({
      success: true,
      data: issue,
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid issue ID',
      });
    }
    res.status(500).json({
      success: false,
      message: 'Failed to fetch issue',
    });
  }
};

module.exports = {
  createIssue,
  getAllIssues,
  getIssueById,
};
