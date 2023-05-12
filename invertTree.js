  const invertTree = (node) => {
    let left = node.left;
    let right = node.right;
    node.right = left;
    node.left = right;
    invertTree(left);
    invertTree(right)
  }
  
  //slightly shorter version:
  const invertTree = (node) => {
    let left = node.left;
    node.left = node.right;
    node.left = right;
    invertTree(node.left);
    invertTree(node.right)
  }
