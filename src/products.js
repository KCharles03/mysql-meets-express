const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "34.67.146.233",
  user: "root",
  password: "BuildingSoFlo",
  database: "Commerce",
})

// const query = `SELECT * FROM Products`

// connection.query(query, (, results, fields) => {
// //   if (err) {
//     console.log(err)
//   }
//   console.log(results)
// })

const getAllProducts = async () => {
  const query = `SELECT * FROM Products`
  const [results, fields] = await connection.promise().query(query)

  console.log(results)

  return results
}
const createProduct = async (product) => {
  const insertQuery = `INSERT INTO Products (Description,SKU,UserId)
VALUES ('${product.Description}', '${product.SKU}',${product.UserId})`

  const [results, fields] = await connection.promise().query(insertQuery)
  console.log(results)
}

//  getAllProducts()

createProduct({
  Description: "Keren new Product",
  SKU: "Keren1234",
  UserId: 1,
})
getAllProducts()
connection.end()
