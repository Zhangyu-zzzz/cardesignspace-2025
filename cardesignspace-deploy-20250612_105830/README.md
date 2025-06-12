# 🚗 Car Design Space - 汽车设计空间

> 一个现代化的汽车图片分享与社区交流平台

## 📋 项目简介

Car Design Space 是一个专为汽车爱好者打造的图片分享和社区交流平台。用户可以上传汽车图片、参与论坛讨论、收藏喜爱的内容，并与其他汽车爱好者交流心得。

### ✨ 主要功能

- 🖼️ **图片上传与管理** - 支持高质量汽车图片上传和分类管理
- 🏆 **品牌车型管理** - 完整的汽车品牌和车型数据库
- 💬 **社区论坛** - 用户可发帖讨论、评论互动
- 📊 **个人主页** - 展示用户上传作品、积分成就
- 🔔 **通知系统** - 实时互动通知
- 🎯 **积分系统** - 鼓励用户活跃参与
- 📱 **响应式设计** - 支持PC和移动端访问

## 🛠️ 技术栈

### 前端技术
- **Vue.js 2.6+** - 渐进式JavaScript框架
- **Element UI** - Vue组件库
- **Vue Router** - 路由管理
- **Vuex** - 状态管理
- **Axios** - HTTP客户端

### 后端技术
- **Node.js** - JavaScript运行环境
- **Express.js** - Web应用框架
- **MySQL** - 关系型数据库
- **MongoDB** - 文档数据库
- **Sequelize** - MySQL ORM
- **JWT** - 身份认证
- **Multer** - 文件上传处理

### 云服务
- **腾讯云COS** - 对象存储服务
- **腾讯云CDN** - 内容分发网络

## 🚀 快速开始

### 环境要求

- Node.js >= 14.0.0
- MySQL >= 5.7
- MongoDB >= 4.0

### 安装步骤

1. **克隆仓库**
```bash
git clone https://github.com/your-username/cardesignspace-2025.git
cd cardesignspace-2025
```

2. **环境配置**
```bash
# 使用统一环境配置脚本
./setup-env.sh development
```

3. **安装依赖**
```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install
```

4. **数据库配置**
```bash
# 在MySQL中创建数据库
CREATE DATABASE cardesignspace;

# 运行数据库初始化脚本
cd ../backend
npm run db:init
```

5. **启动服务**
```bash
# 启动后端服务 (端口3000)
cd backend
npm start

# 启动前端服务 (端口8080)
cd ../frontend
npm run serve
```

6. **访问应用**
- 前端页面：http://localhost:8080
- 后端API：http://localhost:3000/api

## 📁 项目结构

```
cardesignspace-2025/
├── 📁 backend/                 # 后端服务
│   ├── 📁 src/
│   │   ├── 📁 config/         # 配置文件
│   │   ├── 📁 controllers/    # 控制器
│   │   ├── 📁 models/         # 数据模型
│   │   ├── 📁 routes/         # 路由定义
│   │   ├── 📁 middleware/     # 中间件
│   │   ├── 📁 services/       # 业务服务
│   │   └── 📄 app.js          # 应用入口
│   ├── 📁 logs/               # 日志文件
│   ├── 📁 uploads/            # 上传文件
│   └── 📄 package.json
├── 📁 frontend/               # 前端应用
│   ├── 📁 public/             # 静态资源
│   ├── 📁 src/
│   │   ├── 📁 components/     # Vue组件
│   │   ├── 📁 views/          # 页面视图
│   │   ├── 📁 router/         # 路由配置
│   │   ├── 📁 store/          # Vuex状态管理
│   │   └── 📁 utils/          # 工具函数
│   └── 📄 package.json
├── 📄 .env                    # 环境配置
├── 📄 env.example             # 配置模板
├── 📄 setup-env.sh           # 环境设置脚本
└── 📄 README.md
```

## 🔧 环境配置

项目使用统一的环境配置管理：

```bash
# 开发环境
./setup-env.sh development

# 生产环境
./setup-env.sh production
```

主要配置项：
- 数据库连接信息
- JWT密钥配置
- 腾讯云COS配置
- CORS跨域设置
- 日志级别配置

详细配置说明请参考 [ENV-CONFIG-README.md](ENV-CONFIG-README.md)

## 📊 API文档

### 认证接口
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `GET /api/auth/me` - 获取当前用户信息
- `PUT /api/auth/profile` - 更新个人资料

### 图片接口
- `GET /api/images` - 获取图片列表
- `POST /api/upload/single` - 单图片上传
- `POST /api/upload/multiple` - 多图片上传
- `DELETE /api/upload/image/:id` - 删除图片

### 论坛接口
- `GET /api/forum/posts` - 获取帖子列表
- `POST /api/forum/posts` - 发布新帖
- `POST /api/forum/posts/:id/comments` - 发表评论

更多API详情请参考在线API文档。

## 🎯 功能特性

### 🖼️ 图片管理
- 支持多格式图片上传（JPG、PNG、WebP）
- 自动图片压缩和缩略图生成
- 图片分类和标签管理
- 高性能CDN加速

### 👥 用户系统
- 用户注册登录
- 个人主页和资料管理
- 头像上传和更换
- 积分和成就系统

### 💬 社区功能
- 帖子发布和编辑
- 评论和回复
- 点赞和收藏
- 话题标签系统

### 🔔 通知系统
- 实时消息通知
- 评论和点赞提醒
- 系统公告推送

## 🔐 安全特性

- JWT Token身份验证
- 密码bcrypt加密
- XSS防护
- CSRF保护
- 文件上传安全检查
- API访问频率限制

## 🌍 部署指南

### Docker部署（推荐）
```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d
```

### 传统部署
```bash
# 安装PM2
npm install -g pm2

# 启动后端服务
cd backend
pm2 start ecosystem.config.js

# 构建前端
cd ../frontend
npm run build
```

## 🤝 贡献指南

1. Fork 项目仓库
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📝 更新日志

### v2.0.0 (2025-06-08)
- ✅ 完成项目架构重构
- ✅ 统一环境配置管理
- ✅ 修复用户认证问题
- ✅ 优化文件上传功能
- ✅ 改进错误处理机制

### v1.0.0 (2024)
- 🎉 项目初始版本发布
- 🖼️ 基础图片上传功能
- 👥 用户系统实现
- 💬 论坛社区功能

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系我们

- 项目地址：https://github.com/your-username/cardesignspace-2025
- 问题反馈：[Issues](https://github.com/your-username/cardesignspace-2025/issues)
- 邮箱：your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给我们一个Star！ 

## 功能特色

### 用户系统
- 用户注册和登录
- 个人资料管理
- 密码修改和找回

### 图片管理
- 支持多种图片格式上传
- 自动图片压缩和格式转换
- 腾讯云COS存储集成
- 图片标签和分类管理

### 论坛功能
- 发布和浏览帖子
- 表情支持（😊 😂 ❤️ 👍 等）
- 图片上传（最多9张）
- 话题标签系统
- **帖子编辑和删除**：用户可以编辑或删除自己发布的帖子
- 多层级评论和回复系统
- 点赞和收藏功能
- 热门话题和活跃用户展示 