var coworkers = {
  "programmer": "egoing",
  "designer": "leezche"
};

for(var key in coworkers) {
  document.write(coworkers[key]+'<br>');
}
document.write('<br>')
for(var key in coworkers) {
  document.write(key+'<br>');
}