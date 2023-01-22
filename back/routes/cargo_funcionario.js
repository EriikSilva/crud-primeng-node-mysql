const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;



router.get("/", (req, res, next) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        return res.status(500).send({
          error: error,
        });
      }
      conn.query(
        `
            SELECT * FROM cargo_funcionario
        `,
        (error, result, field) => {
          if (error) {
            return res.status(500).send({
              error: error,
            });
          }
  
          const response = {
            // quantidade_de_funcionarios: result.length,
            cargos: result.map((cargo) => {
              return {
                cargo_id: cargo.cargo_id,
                funcionario_id: cargo.funcionario_id,
                request: {
                  tipo: "GET",
                  url: "http://localhost:3000/cargosFuncionario/",
                },
              };
            }),
          };
  
          return res.status(200).send(response);
        }
      );
    });
});

router.get("/:cargo_id", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }
    conn.query(
      `
          SELECT * FROM cargo_funcionario where cargo_id = ?
      `,
      [req.params.cargo_id],
      (error, result, field) => {
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }

        const response = {
          // quantidade_de_funcionarios: result.length,
          cargos: {
            message: "CARGO ENCONTRADO",
            cargo_id: result[0].cargo_id,
            funcionario_id: result[0].funcionario_id,
            request: {
              tipo: "GET",
              url: "http://localhost:3000/cargoFuncionario/",
            },
          },
        };

        return res.status(200).send(response);
      }
    );
  });
});





  router.post("/", (req, res, next) => {
    mysql.getConnection((error, conn) => {
      if (error) {
        return res.status(500).send({
          error: error,
        });
      }
      conn.query(
        "INSERT INTO cargo_funcionario(cargo_id, funcionario_id) VALUES (?, (SELECT id_funcionario FROM funcionarios ORDER BY id_funcionario DESC LIMIT 1));",
        [req.body.cargo_id],
        (error, result, field) => {
          conn.release();
          if (error) {
            return res.status(500).send({
              error: error,
              response: null,
            });
          }
  
          const response = {
            cargoFuncionarioCriado: {
              message: "CARGO Funcionario INSERIDO COM SUCESSO",
              // funcionario_id: req.body.funcionario_id,
              cargo_id: req.body.cargo_id,
              funcionario_id:req.body.funcionario_id,
              request: {
                tipo: "POST",
                url: "http://localhost:3000/cargos/",
              },
            },
          };
  
          res.status(201).send(response);
        }
      );
    });
  });


module.exports = router