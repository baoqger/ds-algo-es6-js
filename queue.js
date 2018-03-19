class queue {
  // 构造函数
  constructor() {
    this.items = [];
  }
  // 在尾部添加一个或者多个元素
  enqueue(element) {
    this.items.push(element);
  }
  // 在头部删除一个元素并返回
  dequeue() {
    return this.items.shift();
  }
  // 仅仅返回第一个元素
  front() {
    return this.items[0];
  }
  // 判断queue是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 返回queue的size
  size() {
    return this.items.length;
  }

}