var furthestBuilding = function (heights, bricks, ladders) {

    let count = 0;

    for (let i = 0; i < heights.length - 1; i++) {
        console.log("i::::",i);
        if (bricks <= heights[i + 1] - heights[i] && ladders <= 0 && heights[i + 1] > heights[i]) {
            // count = count + 1;
            return count;
        } else if(bricks <= heights[i + 1] - heights[i] && ladders <= 0 && heights[i + 1] <= heights[i]){
            count = count + 1;
            return count;
        }else if (heights[i + 1] <= heights[i]) {
            count = count + 1;
            console.log(":::::", heights[i], heights[i + 1], count);
        } else if (heights[i + 1] > heights[i] && bricks >= heights[i + 1] - heights[i]) {
            // if (bricks >= heights[i + 1] - heights[i]) {
                count = count + 1;
                bricks = bricks - (heights[i + 1] - heights[i]);
                console.log(":::::", heights[i], heights[i + 1], bricks, count);
            // }
        } else if (heights[i + 1] > heights[i] && ladders > 0) {
            count = count + 1;
            ladders = ladders - 1;
            console.log(":::::", heights[i], heights[i + 1], ladders, count);
        }
    }
    // return count
};

const result = furthestBuilding([14,3,19,3], 17, 3);

// 0
// 1 ladder -2 bricks-2
// 2 
// 3 ladder - 1 bricks 2
// 4
// 5 ladder - 0 bricks 2
// 

console.log(result);