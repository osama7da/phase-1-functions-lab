// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if(street<42){
        return street -26
    }else{
        return street-42;

    }
}

function distanceFromHqInFeet(street){
    if(street<42){
        return (street-26)*264;
    }else {
        return (street-42)*264
    }
}

function distanceTravelledInFeet(start , destination){
    if(destination>start){
        return (destination - start)*264;
    }else{
        return (start - destination)*264;
    }
    
}

function calculatesFarePrice(start , destination){
    let feetDistance = distanceTravelledInFeet(start , destination) ; 

    if(feetDistance <=400){
        return 0
    }else if(feetDistance>400 && feetDistance<=2000){
        return (feetDistance-400) * 0.02
    }else if(feetDistance>2000 && feetDistance <=2500){
        return 25 
    }else{
        return 'cannot travel that far';
    }
}


