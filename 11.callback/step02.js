// function a() {
//     setTimeout(() => console.log('a() called'), 1000);
// }

// a();
// console.log('a() is done');

// Q. 실행 결과와는 반대로 동작하도록 하려면 코드를 어떻게 변경해야 할지?

function a( callback ) {
    setTimeout( () => {
      console.log('a() called'); // after finshed async task
      callback(); // call i want to task
    }, 1000); // 1 second delay
  }
  
  a( () => console.log('a() is done!') );