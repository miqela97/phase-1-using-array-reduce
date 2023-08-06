const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(batteryBatches) {
    return batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  const totalBatteries = reducer(batteryBatches);
  console.log(totalBatteries);
