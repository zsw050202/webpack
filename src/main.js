/**
 * Created by Administrator on 2017/8/23.
 */
// 入口文件中引入css文件
require('./css/index.css');

// 按路径绘图
$('#can1').attr({
    width: 300,
    height: 300
});

// 埋点
let op1 = {x:130,y:50};
let op2 = {x:210,y:100};
let op3 = {x:130,y:150};
let op4 = {x:50,y:100};

// 构建水面片段
function drawItem() {
    let c = document.getElementById('can1');
    let ctx = c.getContext('2d');
    ctx.strokeStyle = '#e4393c';
    ctx.moveTo(op1.x,op1.y);
    ctx.lineTo(op2.x,op2.y);
    ctx.lineTo(op3.x,op3.y);
    ctx.lineTo(op4.x,op4.y);
    ctx.fill();
}
// drawItem();


// 埋点点位变化
function changeOp(obj1,obj2,obj3,obj4) {
    var obj1Mx = obj1.x + 20;
    var obj1My = obj1.x + 20;
    var obj2Mx = obj2.x + 20;
    var obj2My = obj2.x + 20;
    var obj3Mx = obj3.x + 20;
    var obj3My = obj3.x + 20;
    var obj4Mx = obj4.x + 20;
    var obj4My = obj4.x + 20;
    setInterval(function () {
       obj1.x++;
       if (obj1.x >= obj1Mx) {

       }
       drawItem();
    },100);
}
// changeOp(op1,op2,op3);

// 异步加载模块
$('#btn').click(function () {
    require.ensure([],function () {
        require('./print.js');
    });
});




