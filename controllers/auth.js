const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const db = mysql.createConnection({
  host: process.env.DATABSE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});
let dbObjRaben = {};
let dbObjDPD = {};
let dbObjMat = {};

exports.register = (req, res) => {
  console.log(req.body);

  const { username, name, email, password } = req.body;

  db.query(
    "SELECT email FROM `users-admin` WHERE email = ?",

    [email],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("register", {
          message: "That email is already registered!",
        });
      }
      db.query(
        "INSERT INTO `users-admin` SET ?",
        {
          username: username,
          name: name,
          email: email,
          password: password,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("login", {
              message: "Account has been registered!",
            });
          }
        }
      );
    }
  );
};

exports.login = (req, res) => {
  console.log(req.body);

  let email = req.body.email;
  let password = req.body.password;

  db.query(
    "SELECT email, password FROM `users-admin` WHERE email = ? AND password = ?",
    [email, password],

    async (error, results) => {
      if (error) {
        console.log(error);
      } else if (results.length > 0) {
        console.log(results);
        console.log("You are logged in!");
        res.render("home");
      } else {
        console.log(results);
        return res.render("login", { message: "Incorect credentials!" });
      }
    }
  );
};

exports.addDPD = (req, res) => {
  const { dpdId, dpdName, dpdType, dpdWeight, dpdQuantity, dpdPrice } =
    req.body;

  db.query(
    "SELECT trans_id FROM `dpd-local` WHERE trans_id = ?",

    [dpdId],

    async (error, results) => {
      if (error) {
        console.log(error);
      } else if (results.length > 0) {
        return res.render("add", {
          message: "That ID is already taken! Please provide a new one.",
        });
      }
      db.query(
        "INSERT INTO `dpd-local` SET ?",
        {
          trans_id: dpdId,
          trans_name: dpdName,
          trans_price: dpdPrice,
          trans_quantity: dpdQuantity,
          trans_type: dpdType,
          trans_weight: dpdWeight,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("dataDPD", console.log("Data has been added!"));
          }
        }
      );
    }
  );
};

exports.addRaben = (req, res) => {
  console.log(req.body);

  const {
    rabenId,
    rabenName,
    rabenType,
    rabenWeight,
    rabenQuantity,
    rabenPrice,
  } = req.body;

  db.query(
    "SELECT trans_id FROM `raben-local` WHERE trans_id = ?",

    [rabenId],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("add", {
          message: "That ID is already taken! Please provide a new one.",
        });
      }
      db.query(
        "INSERT INTO `raben-local` SET ?",
        {
          trans_id: rabenId,
          trans_name: rabenName,
          trans_price: rabenPrice,
          trans_quantity: rabenQuantity,
          trans_type: rabenType,
          trans_weight: rabenWeight,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("dataDPD", console.log("Data has been added!"));
          }
        }
      );
    }
  );
};

exports.addMat = (req, res) => {
  console.log(req.body);

  const {
    materialId,
    materialName,
    materialPieces,
    materialSqm,
    materialWeight,
    materialPallet,
    materialWeightPal,
  } = req.body;

  db.query(
    "SELECT material_id FROM `material-types` WHERE material_id = ?",

    [materialId],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("add", {
          message: "That ID is already taken! Please provide a new one.",
        });
      }
      db.query(
        "INSERT INTO `material-types` SET ?",
        {
          material_id: materialId,
          material_name: materialName,
          material_pieces_box: materialPieces,
          material_sqm_box: materialSqm,
          material_weight_box: materialWeight,
          material_box_pallet: materialPallet,
          material_weight_pallet: materialWeightPal,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("dataMat", console.log("Data has been added!"));
          }
        }
      );
    }
  );
};

exports.searchResultDPD = (req, res) => {
  let { trans_id, trans_weight } = req.body;

  db.query(
    "SELECT trans_id, trans_weight FROM `dpd-local` WHERE trans_id=? AND trans_weight=?",
    [trans_id, trans_weight],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        console.log("Exists");

        // return res.render("searchResult", console.log("Data Found!"));
      } else {
        console.log("No Data Found!");

        return res.render("editDPD", {
          message: "No data was found!",
        });
      }
    }
  );

  db.query(
    "SELECT * FROM `dpd-local` WHERE trans_id=?",
    [trans_id],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        dbObjDPD = results.filter((obj) => {
          return obj.trans_id !== null;
        })[0];
        console.log(dbObjRaben);
        return res.render("editDPD", {
          trans_id: dbObjDPD.trans_id,
          trans_name: dbObjDPD.trans_name,
          trans_type: dbObjDPD.trans_type,
          trans_weight: dbObjDPD.trans_weight,
          trans_quantity: dbObjDPD.trans_quantity,
          trans_price: dbObjDPD.trans_price,
        });
      }
    }
  );
};

exports.searchResultRaben = (req, res) => {
  let { trans_id, trans_weight } = req.body;

  db.query(
    "SELECT trans_id, trans_weight FROM `raben-local` WHERE trans_id=? AND trans_weight=?",
    [trans_id, trans_weight],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        console.log("Exists");
      } else {
        console.log("No Data Found!");
        return res.render("editRaben", { message: "No data was found!" });
      }
    }
  );

  db.query(
    "SELECT * FROM `raben-local` WHERE trans_id=?",
    [trans_id],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        dbObjRaben = results.filter((obj) => {
          return obj.trans_id !== null;
        })[0];
        console.log(dbObjRaben);
        return res.render("editRaben", {
          trans_id: dbObjRaben.trans_id,
          trans_name: dbObjRaben.trans_name,
          trans_type: dbObjRaben.trans_type,
          trans_weight: dbObjRaben.trans_weight,
          trans_quantity: dbObjRaben.trans_quantity,
          trans_price: dbObjRaben.trans_price,
        });
      }
    }
  );
};

exports.searchResultMat = (req, res) => {
  let { material_name } = req.body;

  db.query(
    "SELECT material_name FROM `material-types` WHERE material_name=?",
    [material_name],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        console.log("Exists");
      } else {
        console.log("No Data Found!");
        return res.render("editMaterials", { message: "No data was found!" });
      }
    }
  );

  db.query(
    "SELECT * FROM `material-types` WHERE material_name=?",
    [material_name],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        dbObjMat = results.filter((obj) => {
          return obj.material_name !== null;
        })[0];
        console.log(dbObjMat);
        return res.render("editMaterials", {
          material_id: dbObjMat.material_id,
          material_name: dbObjMat.material_name,
          material_pieces_box: dbObjMat.material_pieces_box,
          material_sqm_box: dbObjMat.material_sqm_box,
          material_weight_box: dbObjMat.material_weight_box,
          material_box_pallet: dbObjMat.material_box_pallet,
          material_weight_pallet: dbObjMat.material_weight_pallet,
        });
      }
    }
  );
};

exports.editedDPD = (req, res) => {
  let old_id = dbObjDPD.trans_id;
  let { dpdId, dpdName, dpdType, dpdWeight, dpdQuantity, dpdPrice } = req.body;

  db.query(
    "DELETE  FROM `dpd-local` WHERE trans_id=?",
    [old_id],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return console.log(results);
      }
    }
  );

  db.query(
    "INSERT INTO `dpd-local` SET ?",
    {
      trans_id: dpdId,
      trans_name: dpdName,
      trans_price: dpdPrice,
      trans_quantity: dpdQuantity,
      trans_type: dpdType,
      trans_weight: dpdWeight,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("dpdEdited", console.log("Data has been added!"));
      }
    }
  );
};

exports.editedRaben = (req, res) => {
  let old_id = dbObjRaben.trans_id;
  let {
    rabenId,
    rabenName,
    rabenType,
    rabenWeight,
    rabenQuantity,
    rabenPrice,
  } = req.body;

  db.query(
    "DELETE  FROM `raben-local` WHERE trans_id=?",
    [old_id],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return console.log(results);
      }
    }
  );

  db.query(
    "INSERT INTO `raben-local` SET ?",
    {
      trans_id: rabenId,
      trans_name: rabenName,
      trans_price: rabenPrice,
      trans_quantity: rabenQuantity,
      trans_type: rabenType,
      trans_weight: rabenWeight,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("rabenEdited", console.log("Data has been added!"));
      }
    }
  );
};

exports.editedMat = (req, res) => {
  let old_name = dbObjMat.material_name;
  let {
    materialId,
    materialName,
    materialPiecesBox,
    materialSqmBox,
    materialWeightBox,
    materialBoxesPallet,
    materialWeightPallet,
  } = req.body;

  db.query(
    "DELETE  FROM `material-types` WHERE material_name=?",
    [old_name],

    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return console.log(results);
      }
    }
  );

  db.query(
    "INSERT INTO `material-types` SET ?",
    {
      material_id: materialId,
      material_name: materialName,
      material_pieces_box: materialPiecesBox,
      material_sqm_box: materialSqmBox,
      material_weight_box: materialWeightBox,
      material_box_pallet: materialBoxesPallet,
      material_weight_pallet: materialWeightPallet,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("matEdited", console.log("Data has been added!"));
      }
    }
  );
};

exports.viewDPD = (req, res) => {
  db.query("SELECT * FROM `raben-local`");
  async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      return (dbObjDPD = results.filter());
    }
  };
  console.log(dbObjDPD);
  return res.render("viewDPD", console.log("Data has been generated!"));
};
