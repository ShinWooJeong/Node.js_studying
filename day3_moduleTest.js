////____ day3 Module Tests ____////

// // 01_사용 패턴 : exports에 속성으로 추가된 함수 객체를 그대로 참조한 후 호출함

// var printGirlGroup = require('./day3_modules').printGirlGroup;

// printGirlGroup();
        
//         //require('./day3_modules').printGrilG;
//         //                         ------------ > . 을 붙여서 함수를 참조했기 때문에
//         //                         day1에서(이 페이지 01-3) 처럼 반환받은 export에 속성을 참조해서 실행할 필요없음.
//         //                         exports가 아닌 exports의 printGirlGroup 속성을 변수에 할당했으므로.
      


// // 01-1 _ module.exports에 함수할당
// var printToday = require('./day3_modules');

// printToday();



// // 01-2 _ module.exports에 익명함수 할당
// var pets = require('./day3_modules');
// pets();



// // 01-3 _ exports에 속성으로 익명함수 할당
// var diary = require('./day3_modules');
// diary.print();


// // 01-4   exports에는 객체를 할당할 수 없다.
// var ttt = require('./day3_modules').mmm;
// ttt();









// // 02_사용 패턴 : (인스턴트 객체할당패턴) module.exports에 new연산자로 만든 인스턴스 객체의 함수를 호출함

// var myP = require('./day3_modules');

// myP.printPets();


// // 02-1_사용 패턴 : (인스턴트 객체할당패턴) exports의 속성이름을 추가하되 인스턴스 객체를 만들어 할당함

// var User = require('./day3_modules').hereChanged; 
// //require()메소드를 통해 모듈을 불러들임(call), 부름에 의해 반환된(call에 응답된) 객체의 hereChanged속성을 참조


// User.printUser();







// // 03_사용 패턴 : (프로토타입 객체할당패턴) module.exports에 프로토타입 객체를 정의한 후 힐당

// var Users = require('./day3_modules');
// var user = new Users('tetest1', '냐옹씨');

// user.printUser();

// //프로토타입 객체로 만든 User객체를 참조했으므로
// //new 연산자를 사용해 인스턴스 객체를 만든 수
// //그 안에 정의된 함수를 호출할 수 있음.





// // 03_사용 패턴 : (프로토타입 객체할당패턴) exports의 속성이름을 주면서 추가하된 프로토타입 객체를 정의한 후 할당함

// var User = require('./day3_modules').Dururu;
// var user = new User('냐냥1', '멍멍');

// user.printUser();

// //require()메소드로 모듈을 불러왔을 때, 반환되는 객체는 exports
// //그러므로 그 안에 추가한 .Dururu를 참조한 후
// //new 연산자로 인스턴스 객체를 만들 수 있음.