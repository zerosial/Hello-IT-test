function repeatVaco(n) {
  var result = ''
  for (var i = 0; i < n; i++){
    if(i%2 === 0)
      result = result + '바'
    else
      result = result + '코'
  }
  return result
}

  console.log(repeatVaco(3))