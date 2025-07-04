const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const { optionalAuth, authenticateToken } = require('../middleware/auth');
const multer = require('multer');

// 配置multer中间件用于品牌Logo上传
const logoUpload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB限制
  },
  fileFilter: (req, file, cb) => {
    // 只允许图片文件
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('只允许上传图片文件'));
    }
  }
});

// 获取车型列表（用于上传页面选择）
router.get('/models', uploadController.getModelsForUpload);

// 单文件上传（需要认证）- 控制器中包含multer中间件
router.post('/single', authenticateToken, uploadController.uploadSingleImage);

// 多文件上传（需要认证）- 控制器中包含multer中间件
router.post('/multiple', authenticateToken, uploadController.uploadMultipleImages);

// 更新图片信息
router.put('/image/:id', uploadController.updateImage);

// 删除图片
router.delete('/image/:id', uploadController.deleteImage);

// 获取图片管理列表（可选认证，用于显示用户信息）
router.get('/images', optionalAuth, uploadController.getImagesList);

// ==================== 品牌管理路由 ====================
router.get('/brands', uploadController.getAllBrands);
router.post('/brands', uploadController.createBrand);
router.put('/brands/:id', uploadController.updateBrand);
router.delete('/brands/:id', uploadController.deleteBrand);
// 品牌Logo上传路由 - 使用独立的multer配置
router.post('/brands/:id/logo', logoUpload.single('logo'), uploadController.uploadBrandLogo);

// ==================== 车型管理路由 ====================
router.get('/brands/:brandId/models', uploadController.getModelsByBrand);
router.post('/models', uploadController.createModel);
router.put('/models/:id', uploadController.updateModel);
router.delete('/models/:id', uploadController.deleteModel);

module.exports = router; 