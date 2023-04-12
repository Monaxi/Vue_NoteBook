/* class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  // 添加元素
  push(item) {
    // 推入元素
    this.queue.push(item);
    // 元素上浮
    let index = this.size() - 1; // 记录推入元素下标
    let parent = Math.floor((index - 1) / 2); // 父节点元素下标

    while (parent >= 0 && this.compare(parent, index) > 0) {
      [this.queue[index], this.queue[parent]] = [
        this.queue[parent],
        this.queue[index],
      ];

      // 更新下标、
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 获取并推出堆顶元素
  pop() {
    // 获取堆顶元素
    const out = this.queue[0];

    // 移除堆顶元素，填入最后一个元素
    this.queue[0] = this.queue.pop();

    // 下沉
    let index = 0; //记录下沉元素下标
    let left = 1; // left是左孩子节点的下标，left+1是右孩子节点的下标
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
      [this.queue[index], this.queue[searchChild]] = [
        this.queue[searchChild],
        this.queue[index],
      ];

      // 更新下标
      index = searchChild;
      left = 2 * index + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }
    return out;
  }

  size() {
    return this.queue.length;
  }
  // 使用传入的compareFn比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;
    return this.compareFn(this.queue[index1], this.queue[index2]);
  }
}

const topKFrequent = function (nums, k) {
  const map = new Map();
  // key:value = 数：出现次数
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);
  // entry是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    heap.push(entry);

    if (heap.size() > k) heap.pop();
  }

  const res = [];
  for (let i = heap.size() - 1; i >= 0; i--) res[i] = heap.pop()[0];

  return res;
};
 */
/* 
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorderTraversal = function (root) {
  // 前序遍历TLR，借助栈
  if (root === null) return [];
  const stack = [root];
  let cur = null;
  let res = [];
  while (stack.length) {
    cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
  return res;
};

 */

/* var inorderTraversal = function (root) {
  const stack = [];
  let res = [];
  let cur = root;
  while (stack.length || cur) {
    if (cur) {
      // 左子树
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};
 */
var postorderTraversal = function (root) {
  if (root === null) return [];
  const stack = [root];
  let res = [];
  let cur = null;
  do {
    cur = stack.pop();
    res.push(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  } while (stack.length);
  return res.reverse();
};
