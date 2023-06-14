const { db } = require("../db");
const logger = require("../utils/logger");

const productsController = {

    //Get All Products
    getProducts: (req, res) => {
        const sql = `SELECT * FROM products`
        db.query(sql, (err, results) => {
            if(err){
                logger.error(err);
                return res.status(500).json({ message: "Failed to get the Results." });
            }
            logger.info(results);
            res.status(200).json(results)
        })
    },

    //Add a Product
    addProduct: (req, res) => {
        const {name, price} = req.body
        if(!name || !price){
            res.status(401).json({message: "Missing required Name or Price"})
        };
        const product= {name, price}
        const sql = `INSERT INTO products SET ?`
        db.query(sql, product, (err, result) => {
            if (err || result.affectedRows === 0) {
                err&&logger.error(err);
                return res.status(500).json({ message: "Failed to add the product." });
            }
            res.status(200).json({ message: "Product Added successfully" });
        })
    },

    //Delete a Product
    deleteProduct: (req, res) => {
        const id = req.params.id
        const sql = `DELETE FROM products
        WHERE id = ?`
        db.query(sql, id,(err, result) => {
            if (err) {
                logger.error(err);
                return res.status(500).json({ message: "Failed to delete the product." });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product Deleted successfully" });
        })
    },

    //Update a Product
    updateProduct: (req, res) => {
        const productId = req.params.id;
        const { name, price } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: "Missing required Name or Price" });
        }
        const product = { name, price };
        const sql = `UPDATE products SET ? WHERE id = ?`;

        db.query(sql, [product, productId], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Failed to update the product" });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Product not found" });
            }
            res.status(200).json({ message: "Product updated successfully" });
        });
    }
}

module.exports = productsController