function calculateMinCost() {
  //your code here
	 const ropes = lengths.split(",").map(Number);

  ropes.sort((a, b) => a - b); // Sort the ropes in ascending order

  let cost = 0;

  while (ropes.length > 1) {
    const rope1 = ropes.shift(); // Remove the smallest rope from the front
    const rope2 = ropes.shift(); // Remove the second smallest rope from the front

    const newRope = rope1 + rope2;
    cost += newRope;

    ropes.push(newRope); // Add the new rope to the end of the array
    ropes.sort((a, b) => a - b); // Sort the ropes again
  }

  return cost;

  
  
  
}  
