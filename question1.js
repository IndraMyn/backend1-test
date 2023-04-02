function sum_deep(arr, char) {
    let level = 1;
    let queue = arr.map((node) => [level, node]);
    let total_sum = 0;
  
    while (queue.length > 0) {
      let [current_level, current_node] = queue.shift();
  
      if (current_node.includes(char)) {
        total_sum += current_level;
      }
  
      if (Array.isArray(current_node)) {
        level += 1;
        current_node.forEach((child_node) => {
          queue.push([level, child_node]);
        });
        level -= 1;
      }
    }
  
    return total_sum;
  }
  