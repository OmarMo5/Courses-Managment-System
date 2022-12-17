const Emails = [
  {
    id: 1,
    type: "STD",
    userName: "mahmoud",
    pass: "111111",
  },
  {
    id: 2,
    type: "STD",
    userName: "qtb",
    pass: "222222",
  },
  {
    id: 3,
    type: "TA",
    userName: "ghonim",
    pass: "111222",
  },
  {
    id: 4,
    type: "TA",
    userName: "elsaid",
    pass: "222111",
  },
  {
    id: 5,
    type: "AD",
    userName: "ahmed hesham",
    pass: "000000",
  },
  {
    id: 6,
    type: "STD",
    userName: "ali",
    pass: "111",
  },
  {
    id: 7,
    type: "TA",
    userName: "hany",
    pass: "222",
  },
  {
    id: 8,
    type: "AD",
    userName: "zizo",
    pass: "333",
  },
];

export { Emails };

const courses = [
  {
    id: 1,
    userName: "mahmoud",
    pass: "111111",
    courses: [
      ["123", "JS", "60", "bishoay"],
      ["321", "CSS", "93", "adel"],
    ],
  },
  {
    id: 2,
    userName: "qtb",
    pass: "222222",
    courses: [
      ["123", "JS", "90", "bishoay"],
      ["321", "CSS", "43", "adel"],
    ],
  },
  {
    id: 2,
    userName: "qtb",
    pass: "222222",
    courses: [
      ["201", "MATH", "52", "anahanan"],
      ["101", "AI", "33", "ghonim"],
      ["102", "DS", "74", "elsaid"],
      ["011", "CS", "90", "marwa"],
    ],
  },
];
export { courses };

/* 0-Name 1-ID 2-hours 3-prices*/
const AllCourses = [
  ["AI", "101", "760", "90"],
  ["CS", "011", "200", "120"],
  ["MATH", "201", "300", "30"],
  ["DS", "102", "450", "45"],
  ["JS", "123", "230", "95"],
  ["CSS", "321", "230", "95"],
];
export { AllCourses };
