import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [name, setName] = useState('张三');
  const age = 20; // 未使用变量（ESLint 错误）
  useEffect(() => {
    // console.log('测试 console'); // ESLint warn（允许 warn/error，但会提示）
    setName('李四');
  }, []); // 依赖缺失 name（react-hooks 规则错误）

  // 行宽超 120 字符 + 双引号 + 无尾随逗号（Prettier 格式错误）
  const user = {
    name: '王五',
    age: 30,
    address: '这是一个很长的地址，用来测试 Prettier 的 printWidth 配置，故意让行宽超过 120 字符',
  };
  return (
    <div>
      测试 ESLint + Prettier{name}-{age}-{user.name}-{user.age}-{user.address}
      <h1>回到德国</h1>
    </div>
  );
}

export default App;
