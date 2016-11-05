# 数字滚动组件

## 使用方法：
初始化：new CountUp(id, startNumber, decimals);

参数：元素ID，开始数字，小数位

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

## Demo
```
var count = new CountUp("count", 1230.25, 2)

// 获取到新数据后
count.update(1239.77)
```
