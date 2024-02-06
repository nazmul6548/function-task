
// batch 8 assignment problem1function findAdress(params) {
  const value1 = params.street || "__";
  const value2 = params.house || "__";
  const value3 = params.society || "__";
  const myAdress = value1 + "," + value2 + "," + value3;
  return myAdress;
}
const myObject = {
  street: 10,
  house: "15A",
  society: "Earth perfect",
};
const objectOutput = findAdress(myObject);
console.log(objectOutput);
