////____ day3 Modules ____////


// // 01_사용 패턴 : (함수할당패턴) exports에 속성으로 추가된 함수 객체를 그대로 참조한 후 호출함

// exports.printGirlGroup = function() {
//     console.log('Grirl Group name is IzOne.');
// };



// // 01-1 _ module.exports에 함수할당
// function printGift () {
//     console.log('현영이에게 선물과 편지를 줬다.');
// }

// module.exports = printGift;



// // 01-2 _ module.exports에 익명함수 할당
// module.exports = function () {
//     console.log('모찌 테리는 산책을 하면 행복해');
// }


// // 01-3 _ exports에 속성으로 익명함수 할당
// exports.print = function() {
//     console.log(' 오늘 훈이네에 빨래 건조대가 왔다');
// }



// // 01-4   exports에는 객체를 할당할 수 없다.
// function mmm() {
//     console.log('ㅎㅎㅎ');
// }

// exports = mmm;











// // 02_사용 패턴 : (인스턴트 객체할당패턴) module.exports에 인스턴스 객체를 만들어 할당함

// function myPets (id, name) {     // <- 함수르 생성자로 지정하여 객체를 정의
//     this.id = id;
//     this.name = name;            // myPets객체의 속성으로 만들기 위해 this객체 사용
// }33


// myPets.prototype.getPets = function () {  // <- prototype 객체를 사용해 myPets 객체에 속성으로 함수 추가
//     return {id:this.id, name:this.name};
// }

// myPets.prototype.group = { id:'group1', name:'애깅이들'} // <- prototype 사용해 myPets 객체에 값추가

// myPets.prototype.printPets = function () {
//     console.log('my Pet 이름 : %s, Group 이름 : %s', this.name, this.group.name);
// }



// module.exports = new myPets('test01', '양이');  // <- new연산자를 사용해 새로운 인스턴스 객체 생성
//                                                 // <- module.exports 에 이렇게 직접 할당하면, 모듈을 불러오는 쪽에서 인스턴스 객체를 바로 참조 가능




// // 02-1_사용 패턴 : (인스턴트 객체할당패턴) exports의 속성 이름을 주면서 추가하되 인스턴스 객체를 만들어 할당함

// function User(id, name) {
//     this.id = id;
//     this.name = name;
// }

// User.prototype.getUser = function () {
//     return {id: this.id, name:this.name};
// }

// User.prototype.group = {id:'group1', name:'친구'};

// User.prototype.printUser = function () {
//     console.log('사용자 이름: %s, 그룹 이름: %s',this.name, this.group.name);
// }

// exports.hereChanged = new User('tete1', '댕댕이'); // <- 02번이랑 다른부분






// // 03_사용 패턴 : (프로토타입 객체할당패턴) module.exports에 프로토타입 객체를 정의한 후 할당함

// //생성자함수
// function User(id, name) {
//     this.id = id;
//     this.name = name;
// }

// User.prototype.getUser = function () {
//     return {id: this.id, name: this.name};
// }

// User.prototype.group = {id:'group1', name:'Friends'};

// User.prototype.printUser = function () {
//     console.log('사용자 이름: %s,  사용자 id: %s,  그룹이름: %s',this.name, this.id, this.group.name);
// }


// module.exports = User;





// // 03-1_사용 패턴 : (프로토타입 객체할당패턴) exports의 속성 이름을 주면서 추가하되 프로토타입 객체를 정의한 후 할당함

// //생성자함수
// function User(id, name) {
//     this.id = id;
//     this.name = name;
// }

// User.prototype.getUser = function () {
//     return {id:this.id, name:this.name};
// }

// User.prototype.group = {id:'group1', name:'절친'};

// User.prototype.printUser = function () {
//     console.log('사용자 아이디: %s,  사용자 이름: %s,  그룹 이름: %s', this.id, this.name, this.group.name);
// }

// exports.Dururu = User;
