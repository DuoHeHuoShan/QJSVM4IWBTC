# IWBTC QuickJS 虚拟机

> 一个纯IWBTC触发器实现的Quick JS虚拟机

[参考文档](https://duohehuoshan.github.io/QJSVM4IWBTC/docs/index.html) [教程](https://duohehuoshan.github.io/QJSVM4IWBTC/tutorial/index.html)

## 优势
- 可直接访问触发器的全局变量

## 缺点
- JS语言支持不完整
    - 不支持JSON
    - 未实现部分JS函数
    - 不支持eval
- 效率低
    - 需要编译成字节码
    - 运行效率低下