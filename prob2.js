/* 2번 문제 답안을 작성해주세요. */
function factorial(i) {
    var r = i;
    for (var a = i; a > 1; a--) {
        r *= (a-1);
    }
    return r;
}

function solution(n) {
    var answer = 1;
    var num = 1;
    var r = 0;
    while (1) {
        r = factorial(answer);
        if (r == n) break;
        else if (r > n) {
            answer -= 1;
            break;
        }
        answer ++;
    }
    return answer;
}