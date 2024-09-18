const express = require('express');
const bodyParser = require('body-parser');

// 创建一个 Express 应用
const app = express();

// 使用 body-parser 中间件来解析 JSON 请求体
app.use(bodyParser.json());

// 在内存中存储一些示例用户数据
const users = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'pass' }
];

// 定义 /api/login 路由，用于处理登录请求
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // 检查发送的用户名和密码是否与现有用户匹配
  const user = users.find(u => u.username === username && u.password === password);
  console.log(`Got a message from ${user}`);
  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// 启动服务器，监听请求
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});