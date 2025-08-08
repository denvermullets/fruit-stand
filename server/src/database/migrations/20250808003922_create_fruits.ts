import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("fruits", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.boolean("in_season").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("fruits");
}
