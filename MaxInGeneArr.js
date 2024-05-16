
// My Code

var getMaximumGenerated = function (n) {
    let arr = [];

    arr[0] = 0;

    if (n >= 1) {
        arr[1] = 1;
    }

    let maxNumber = 0;
    if (n > 1) {
        for (let i = 2; i < n + 1; i++) {
            let index = Math.floor(i / 2);
            if (i % 2 === 0) {
                arr[i] = arr[index];
                maxNumber = Math.max(maxNumber, arr[i]);
            } else if (i % 2 === 1) {
                arr[i] = arr[index] + arr[index + 1]
                maxNumber = Math.max(maxNumber, arr[i]);
            }
        }
    } else if (n === 0) {
        maxNumber = 0
    } else if (n === 1) {
        maxNumber = 1
    }

    return maxNumber;
};

getMaximumGenerated(7);


// Efficient Code

// if (n === 0) return 0;

//     const nums = new Array(n + 1).fill(0);
//     nums[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         if (i % 2 === 0) {
//             nums[i] = nums[i / 2];
//         } else {
//             const index = Math.floor(i / 2);
//             nums[i] = nums[index] + nums[index + 1];
//         }
//     }

//     return Math.max(...nums);