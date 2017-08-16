var twoSumHash = function(nums, target)  {
  var hash = {};
  var result = null;
  for(var i = 0; i < nums.length; i += 1){
    hash[nums[i]] = i;
  }
  var hash_keys = Object.keys(hash);
  Object.keys(hash).map(function(key, index){
    var complement = target - nums[index];
    if( hash.hasOwnProperty(complement) && hash[complement] != index){
      result = [complement, nums[index]];
    }
  });
  if(result){
    return result;
  }
  return "No two sum pairs in array";
};
