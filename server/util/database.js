const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = async (callback) => {
  return new Promise(async (resolve) => {
    if (_db) {
      resolve(_db);
    } else {
      MongoClient.connect(
        "mongodb+srv://boyajem136:Wv1sRt3RYR2CPTRH@cluster0.ljv1qeg.mongodb.net/employees?retryWrites=true&w=majority"
      )
        .then((client) => {
          console.log("Connected");
          _db = client.db("employee_data");
          if (callback) {
            callback();
          }
          resolve(_db);
        })
        .catch((error) => {
          console.log(error);
          resolve(null);
        });
    }
  });
};

module.exports = {
  mongoConnect,
};
