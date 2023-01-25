const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;

//GET DE USUARIOS
router.get("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }
    conn.query(
      `
        SELECT
        f.id_funcionario,
        f.nome_completo,
        c.nome_cargo,
        cf.criado_em,
        cf.atualizado_em
        FROM funcionarios as f
        INNER JOIN
        cargo_funcionario as cf
        ON f.id_funcionario = cf.funcionario_id
        INNER JOIN
        cargo as c
        on cf.cargo_id = c.id
    `,
      (error, result, field) => {
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }

        const response = {
          // quantidade_de_funcionarios: result.length,
          funcionarios: result.map((func) => {
            return {
              id_funcionario: func.id_funcionario,
              nome_completo: func.nome_completo,
              nome_cargo: func.nome_cargo,
              criado_em: func.criado_em,
              atualizado_em: func.atualizado_em,
              request: {
                tipo: "GET",
                url:
                  "http://localhost:3000/funcionarios/" + func.id_funcionario,
              },
            };
          }),
        };

        return res.status(200).send(response);
      }
    );
  });
});

router.get("/:id_funcionario", (req, res, next) => {
  //   let id = req.params.id_produto;

  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }
    conn.query(
      `SELECT 
      id_funcionario,
      nome_completo, 
      nome_cargo,
      cargo_id
      FROM funcionarios
      INNER JOIN cargo_funcionario on funcionarios.id_funcionario = cargo_funcionario.funcionario_id
      INNER JOIN cargo on cargo_funcionario.cargo_id = cargo.id
      WHERE id_funcionario = ?
      `,
      [req.params.id_funcionario],
      (error, result, field) => {
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }

        if (result.length == 0) {
          return res.status(404).send({
            message: "funcionario não encontrado ou não existe",
          });
        }

        const response = {
          funcionario: {
            message: "FUNCIOnARIO ENCONTRADO",
            id_funcionario: result[0].id_funcionario,
            nome_completo: result[0].nome_completo,
            cargo_id: result[0].cargo_id,
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

//POST
router.post("/", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }
    // INSERT INTO cargo_funcionario(cargo_id, funcionario_id) VALUES ( ? , (SELECT id_funcionario FROM funcionarios ORDER BY id_funcionario DESC LIMIT 1));
    conn.query(
      `INSERT INTO funcionarios (nome_completo) VALUES (?);
      INSERT INTO cargo_funcionario(cargo_id, funcionario_id) VALUES ( ? , (SELECT id_funcionario FROM funcionarios ORDER BY id_funcionario DESC LIMIT 1));
      `,
      [req.body.nome_completo, req.body.cargo_id],
      (error, result, field) => {
        conn.release();
        // console.log(req.body.cargo_id);

        if (error) {
          return res.status(500).send({
            error: error,
            response: null,
          });
          // throw error
        }

        const response = {
          funcionarioCriado: {
            message: "FUNCIONARIO INSERIDO COM SUCESSO",
            nome_completo: req.body.nome_completo,
            cargo_id: req.body.cargo_id,
            // request: {
            //   tipo: "POST",
            //   url: "http://localhost:3000/funcionarios/",
            // },
          },
        };
        res.status(201).send(response);
      }
    );
  });
});

router.patch("/:id_funcionario", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query(
      // UPDATE funcionarios
      //       SET nome_completo = ?
      //       WHERE id_funcionario = ?
      `
      UPDATE funcionarios 
            SET nome_completo = ?
            WHERE id_funcionario = ?;
                     
        UPDATE cargo_funcionario 
        SET cargo_id = ?
        WHERE funcionario_id = ?
        `,
      [
        req.body.nome_completo,
        req.params.id_funcionario,
        req.body.cargo_id,
        req.params.id_funcionario,
      ],
      (error, result, field) => {
        conn.release();
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }
        res.status(201).send({
          message: "FUNCIONARIO ATUALIZADO COM SUCESSO",
          resultado: field,
        });
      }
    );
  });
});

router.delete("/:id_funcionario", (req, res, next) => {
  mysql.getConnection((error, conn) => {
    if (error) {
      return res.status(500).send({
        error: error,
      });
    }

    conn.query(
      "DELETE FROM funcionarios WHERE id_funcionario = ?",
      [req.params.id_funcionario],
      (error, result, field) => {
        conn.release();
        if (error) {
          return res.status(500).send({
            error: error,
          });
        }
        res.status(201).send({
          message: "FUNCIONARIO REMOVIDO COM SUCESSO",
        });
      }
    );
  });
});

module.exports = router;
