'use strict';
class CountUp {

  constructor(id, number, decimals, duration, options) {

    document.querySelector(`#${id}`).innerHTML = '<ul class="countUp-container"></ul>'
    this.container = document.querySelector(`#${id}`).children[0]
    this.scrollHeight = this.container.offsetHeight
    this.decimals = decimals

    // 补充小数位
    if(decimals > 0) {
      number = number.toFixed(decimals)
    }
    this.numberArr = number.toString().split('.')

    // 初始化 DOM 结构
    let domHTML = ''
    this.numberArr[0].split('').forEach((num, idx, arr) => {
      const reverseIdx = arr.length - idx - 1
      domHTML += this.renderNumberTemplate(reverseIdx, 'int')
    })

    // 参数中是否有小数
    if(this.decimals > 0) {
      domHTML += '<li>.</li>'
      for(let i = 0; i < this.decimals; i++) {
        domHTML += this.renderNumberTemplate(i, 'decimal')
      }
    }

    this.container.innerHTML = domHTML


    // 开始第一次滚动
    this.update(number)
  }

  update(newNumber) {
    const newNumberArr = newNumber.toString().split('.')
    const newIntArr = newNumberArr[0].split('')
    const intArr = this.numberArr[0].split('')

    // 数量不同则根据实际情况进行DOM节点的增减
    if(newIntArr.length !== intArr.length) {
      const sub = intArr.length - newIntArr.length

      // 如果差值大于 0 ，则证明数字位减少了，需要减少位数
      if(sub > 0) {
        for(let i = 0; i < sub; i++) {
          const reverseIdx = intArr.length - i - 1
          this.container.removeChild(this.container.querySelector(`.countUp-int-${reverseIdx}`))
        }
      } else if (sub < 0) {
        for(let i = newIntArr.length + sub; i < newIntArr.length; i++) {
          const newLi = this.renderNumberTemplate(i, 'int')
          this.container.innerHTML = newLi + this.container.innerHTML
        }
      }
    }

    // 开始滚动
    setTimeout(()=>this.scrollUp(newNumberArr), 60)
  }

  scrollUp(numberArr) {
    this.numberArr = numberArr
    const intArr = numberArr[0].split('')

    intArr.forEach((number, idx) => {
      const reverseIdx = intArr.length - idx - 1
      const li = this.container.querySelector(`.countUp-int-${reverseIdx}`)
      li.style.transform = `translate(0, ${-this.scrollHeight * number || 0}px)`
    })

    if(this.decimals > 0) {
      const decimalArr = numberArr[1].split('')
      for(let i = 0; i < this.decimals; i++) {
        const li = this.container.querySelector(`.countUp-decimal-${i}`)
        li.style.transform = `translate(0, ${-this.scrollHeight * decimalArr[i] || 0}px)`
      }
    }
  }

  renderNumberTemplate(reverseIdx, type) {
    return `
    <li class="countUp-${type}-${reverseIdx}">
      <div>0</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </li>
    `
  }
}

export default countUp
