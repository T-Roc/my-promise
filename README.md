# my-promise

## 目录结构

```bash
my-promise            
├─ LICENSE            
├─ README.md          
├─ my-promise.js ..................... 手写代码    
├─ package-lock.json  
├─ package.json ...................... npm run test 运行 Promise A+ test    
└─ test.js ........................... 面试题测试           
```

## Promise A+ 测试

1. 安装一下

```ssh
npm install promises-aplus-tests -D 
```

2. 手写代码中加入 deferred 

```js
MyPromise {
  ......
}

MyPromise.deferred = function () {
  var result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}
module.exports = MyPromise;
```

3. 配置启动命令

```json
// package.json

"scripts": {
  "test": "promises-aplus-tests my-promise"
},

```

开启测试

```ssh
npm run test
```