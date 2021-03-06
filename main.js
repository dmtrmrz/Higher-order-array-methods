const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach

// companies.forEach(function (company) {
//   console.log(company);
// });

//
// filter //

// Using FOR //
// let adult = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     adult.push(ages[i]);
//   }
// }

// Using filter //
// const adult = ages.filter(function (age) {
//   if (age >= 18) {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(function (company) {
//     if (company.category === "Retail") {
//       return true;
//     }
//   });

// w/ arrow func //
// Adults //
// const adult = ages.filter((age) => age >= 18);

// Retail C //
// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );
// console.log(retailCompanies);

// 80's //
// const eightiesCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eightiesCompanies);

// Lasted 10 years and more //
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

//
// map //
//

// Array of C's names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

// w/ Arrow F
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// Sqr ages
// const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare);

// const agesSquareByTwo = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquareByTwo);

//
// sort
//

// Sort C's by start year //
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// Sort Ages //
// const sortedAges = ages.sort(); --- by first number

// const sortedAges = ages.sort((a, b) => a - b);
// const sortedAgesBackward = ages.sort((a, b) => b - a);
// console.log(sortedAges);

//
//reduce
//

// Summary of Ages
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for  C's
// const totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(totalYears);

//
// Combine Methods
//

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
