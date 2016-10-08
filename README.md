# 数字滚动组件

## 使用方法：
初始化：new CountUp(#id, startNumber, decimals);

API：
update(number) // 更新到哪个数字

## 样式配置：
```css
.countUp-container {
  list-style: none;
  overflow: hidden;
  height: 16px;
}
.countUp-container li {
  float: left;
  transition: all 0.3s ease;
}
.countUp-container li div {
  height: 16px;
  font-size: 16px;
}
```
