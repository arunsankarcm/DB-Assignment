# Answers for Database Assignment

## Question 1: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

The relationship between `Product` and `Product_Category` is a one-to-one (1:1) association. This is depicted in the diagram by the line connecting `category_id` in the `Product` table to `id` in the `Product_Category` table. This means each entry in the `Product` table is linked to a unique entry in the `Product_Category` table, where `category_id` is a foreign key in the `Product` table that references the primary key `id` in the `Product_Category` table.

## Question 2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure that each product in the `Product` table has a valid category, the following steps should be implemented:

1. **Foreign Key Constraint**: Apply a foreign key constraint on the `category_id` column in the `Product` table that references the `id` column of the `Product_Category` table. This enforces that any `category_id` entered in the `Product` table must exist in the `Product_Category` table.

2. **NOT NULL Constraint**: The `category_id` column should have a NOT NULL constraint to ensure that every product record has a category associated with it upon creation.

3. **Referential Actions**: Define referential actions such as ON DELETE RESTRICT or ON UPDATE CASCADE to maintain referential integrity. For instance, preventing the deletion of a category that is in use by a product, or cascading the update of a category's ID to all associated products.
