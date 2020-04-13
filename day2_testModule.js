////____ day2 ____////

// //01_객체를 할당할 경우
// var user = require('./day2_module');

// function showUser() {
//     return user.getUser().name + ', ' + user.group.name;
// }

// console.log( '사용자 : %s', showUser());



// //02_익명함수를 할당할 경우:
// var user = require('./day2_module');

// function showUser() {
//     return user().name + ', ' + 'No Group';
// }

// console.log('사용자 : %s', showUser());




// //03_가상으로 require()함수를 정의해서 내부적으로 돌아가는거 알아보기
// var require = function(path) {
//     var exports = { 
//         getUser : function() {
//             return { id : 'test01', name: '도로주행빨리하고싶다'}
//         },
//         group : { id : 'group01', name: '한방에 합격해야징'}
//     }
//     return exports;
// }


// var user = require(05);

// function showUser() {
//     return user.getUser().name + ', ' + user.group.name;
// }

// console.log('운전면허 : %s', showUser());




//04_exports 실험
var user = require('./day2_module');
function show() {
    return user.gg.name;
}
console.log('%s',show())