function calculateMinCost() {
  const inputElement = document.getElementById("rope-lengths");
  const resultElement = document.getElementById("result");
  
  // Get the comma-separated rope lengths from the input
  const input = inputElement.value;
  const ropeLengths = input.split(",").map(length => parseInt(length.trim()));
  
  // Calculate the minimum cost of connecting ropes
  const minCost = getMinimumCost(ropeLengths);
  
  // Display the result in the <div id="result"></div> element
  resultElement.innerText = "Minimum cost: " + minCost;
}

function getMinimumCost(ropeLengths) {
  // Sort the rope lengths in ascending order
  ropeLengths.sort((a, b) => a - b);
  
  let totalCost = 0;
  
  while (ropeLengths.length > 1) {
    // Take the two smallest ropes
    const smallest1 = ropeLengths.shift();
    const smallest2 = ropeLengths.shift();
    
    // Connect the ropes and add the cost to the total
    const cost = smallest1 + smallest2;
    totalCost += cost;
    
    // Insert the connected rope back into the sorted array
    const insertIndex = ropeLengths.findIndex(length => length >= cost);
    if (insertIndex === -1) {
      // If the connected rope has the largest length, append it at the end
      ropeLengths.push(cost);
    } else {
      ropeLengths.splice(insertIndex, 0, cost);
    }
  }
  
  return totalCost;
}
