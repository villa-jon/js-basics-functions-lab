// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
    if (blockNum > 42) {
        return blockNum - 42
    } else {
        return 42 - blockNum
    }
}
 
function distanceFromHqInFeet (feet) {
   return distanceFromHqInBlocks(feet) * 264
  } 

  function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0;
      }
      else if (feet > 400 && feet <= 2000) {
        return (feet - 400)*0.02;
     }
        else if (feet > 2000 && feet < 2500) {
          return 25;
       } else {
         return 'cannot travel that far';
       }
}