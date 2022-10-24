export function quizTimer() {
  let countdown = 15;
  let timer = setInterval(function () {
    // console.log(countdown);
    countdown--;
    if (countdown === 0) {
      stopTimer();
    }
  }, 1000);

  const stopTimer = function () {
    console.log('time is up!');
    clearInterval(timer);
  };
}
quizTimer();
