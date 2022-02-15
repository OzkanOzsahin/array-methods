// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function(array) {
  //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
  const newArray = array.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
  return newArray;
};

const impeachTrumpSplice = function(array) {
  const removedElement = array.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]