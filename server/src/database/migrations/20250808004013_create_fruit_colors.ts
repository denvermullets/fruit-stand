import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("fruit_colors", function (table) {
    table.increments("id").primary();
    table.integer("fruit_id").unsigned().references("id").inTable("fruits").onDelete("CASCADE");
    table.string("color").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("fruit_colors");
}
