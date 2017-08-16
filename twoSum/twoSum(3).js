var twoSumHash = function(nums, target)  {
  var hash = {};
  for(var i = 0; i < nums.length; i += 1){
    var complement = target - nums[i];
    console.log(complement + "=" + target + "-" + nums[i]);
    if(hash.hasOwnProperty(complement)){
      return [hash[complement], i];
    }
    hash[nums[i]] = i;
  }
  return "No two sum pairs in array";
};