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
          SELECT * FROM cargo
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
              id: cargo.id,
              nome_cargo: cargo.nome_cargo,
              request: {
                tipo: "GET",
                url: "http://localhost:3000/cargos/" + cargo.id,
              },
            };
          }),
        };

        return res.status(200).send(response);
      }
    );
  });
});

router.get("/:id", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }
    conn.query(
      `
          SELECT * FROM cargo where id = ?
      `,
      [req.params.id],
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
            id: result[0].id,
            nome_cargo: result[0].nome_cargo,
            request: {
              tipo: "GET",
              url: "http://localhost:3000/funcionarios/",
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
      "INSERT INTO cargo (nome_cargo) VALUES (?)",
      [req.body.nome_cargo],
      (error, result, field) => {
        conn.release();

        if (error) {
          return res.status(500).send({
            error: error,
            response: null,
          });
        }

        const response = {
          cargoCriado: {
            message: "CARGO INSERIDO COM SUCESSO",
            nome_cargo: req.body.nome_cargo,
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

module.exports = router;
