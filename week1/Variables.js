var students = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]

students.forEach(function (element) {
    console.log(JSON.stringify(students, null, "  "))
    element.state = "ohio";
    console.log(JSON.stringify(students, null, "  "))
    element.dateOfBirth = "june241994";
    console.log(JSON.stringify(students, null, "  "))
    element.payrate = "GS5";
    console.log(JSON.stringify(students, null, "  "))
  });

    console.log(JSON.stringify(students, null, "  "))
 
  

