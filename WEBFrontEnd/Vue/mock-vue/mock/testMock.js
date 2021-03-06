const Mock = require('mockjs');

let id = Mock.mock('@id');

let obj = Mock.mock({
    id: '@id',
})

let actualObj = Mock.mock({
    id: "@id",      // 随机生成id
    username: "@cname()",   // 随机生成name
    date: "@date()",    // 随机生成时间日期
    avatar: "@image('200x200', 'red', '#fff', 'avatar')",   // 随机生成图片; 参数(size, backgroundColor, fontColor, content);
    description: "@paragraph()", // 生成描述
    ip: "@ip()", // 生成ip
    email: "@email()",   // 生成邮箱地址
})

console.log(actualObj)