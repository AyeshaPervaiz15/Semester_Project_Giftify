const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getNumberOfStudentsInDept(deptName: String!, degreeName: String): Int
  }

  type University {
    dept: [Dept]
  }

  type Dept {
    name: String
    degrees: [Degree]
  }

  type Degree {
    name: String
    numberOfStudents: Int
  }
`;

module.exports = typeDefs;
