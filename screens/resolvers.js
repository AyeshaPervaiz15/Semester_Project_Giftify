const universityArray = [
    {
      dept: [
        {
          name: 'CS',
          degrees: [
            {
              name: 'Bachelor',
              numberOfStudents: 70
            },
            {
              name: 'Master',
              numberOfStudents: 30
            },
            {
                name: 'Phd',
                numberOfStudents: 10
              }
          ]
        },
        {
          name: 'Math',
          degrees: [
            {
              name: 'Bachelor',
              numberOfStudents: 40
            },
            {
              name: 'Master',
              numberOfStudents: 20
            },
            {
                name: 'Phd',
                numberOfStudents: 15
              }
          ]
        },
        {
            name: 'SE',
            degrees: [
              {
                name: 'Bachelor',
                numberOfStudents: 80
              },
              {
                name: 'Master',
                numberOfStudents: 45
              },
              {
                  name: 'Phd',
                  numberOfStudents: 22
                }
            ]
          },
          {
            name: 'Architect',
            degrees: [
              {
                name: 'Bachelor',
                numberOfStudents: 25
              },
              {
                name: 'Master',
                numberOfStudents: 19
              },
              {
                  name: 'Phd',
                  numberOfStudents: 16
                }
            ]
          }
      ]
    }
  ];
  
  const resolvers = {
    Query: {
      getNumberOfStudentsInDept: (_, { deptName, degreeName }) => {
        const dept = universityArray[0]?.dept.find(department => department.name === deptName);
        
        if (dept) {
          if (degreeName) {
            const degree = dept.degrees.find(d => d.name === degreeName);
            return degree ? degree.numberOfStudents : null;
          } else {
            return dept.degrees.reduce((total, degree) => total + degree.numberOfStudents, 0);
          }
        }
  
        return null;
      }
    }
  };
  
  module.exports = resolvers;
  