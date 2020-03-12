// 모듈에 대해 알아보기

////____ 예제 1번, 모듈파일 불러오기 ____//

// require() 메소드는 exports 객체를 리턴함

var user = require('./day1_exports');

function showUser() {
    return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보: %s', showUser());