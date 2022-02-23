function distanceFromHqInBlocks(block){
    if (block > 42){
    return block - 42;
    }else{
        return 42 - block;
    }
};

function distanceFromHqInFeet(number){
   return distanceFromHqInBlocks(number) * 264;
};

function distanceTravelledInFeet(start, destination){
    if (destination > start) {
    return (destination - start) * 264;
    } else if (destination < start) {
        return (start - destination) * 264;
    }
};

function calculatesFarePrice(beggining , end){
    if (distanceTravelledInFeet(beggining, end) < 400){
        return 0;
    } else if (distanceTravelledInFeet(beggining, end) > 400 && distanceTravelledInFeet(beggining, end) < 2000){ 
        return (distanceTravelledInFeet(beggining, end) - 400) * .02;
    } else if (distanceTravelledInFeet(beggining, end) > 2000 && distanceTravelledInFeet(beggining, end) < 2500){ 
        return 25;
    }  else if (distanceTravelledInFeet(beggining, end) > 2500 ) {
        return "cannot travel that far";
    }
};