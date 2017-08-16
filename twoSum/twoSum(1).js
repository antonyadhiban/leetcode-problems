var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length-1; i += 1 ){
      for(var j = i+1; j < nums.length; j += 1){
          if(nums[i] + nums[j] === target){
              return [i, j];
          }
      }
  }
};