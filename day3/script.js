let objectss = {
    name: "Raj",
    age: 25,
};

let objNew = {
    name: "Jar",
    age: 23,
};

let mergedObject = { ...objectss, ...objNew };

console.log(mergedObject);
