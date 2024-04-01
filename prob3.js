function solution(arr) {
    var answer = [];
    var min = arr[0];
    var min_index = 0;
    answer = arr.map(function(num, index) {
        if (num < min) {
            min = num;
            min_index = index;
        }
        return num;
    });
    answer.splice(min_index, 1);
    if (!answer.length) {
        answer = [-1];
    }
    return answer;
}