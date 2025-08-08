import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("fruit_colors").del();
  await knex("fruits").del();

  const fruits = [
    {
      name: "Apple",
      colors: ["red", "green", "yellow"],
      in_season: true,
    },
    {
      name: "Orange",
      colors: ["orange"],
      in_season: true,
    },
    {
      name: "Grapes",
      colors: ["purple", "green"],
      in_season: false,
    },
    {
      name: "Lime",
      colors: ["green"],
      in_season: false,
    },
    {
      name: "Banana",
      colors: ["yellow"],
      in_season: false,
    },
    {
      name: "Watermelon",
      colors: ["red"],
      in_season: false,
    },
    {
      name: "Blueberry",
      colors: ["blue"],
      in_season: true,
    },
    {
      name: "Coconut",
      colors: ["white"],
      in_season: true,
    },
  ];

  for (const fruit of fruits) {
    const [{ id: fruitId }] = await knex("fruits")
      .insert({
        name: fruit.name,
        in_season: fruit.in_season,
      })
      .returning("id");

    const colorInserts = fruit.colors.map((color) => ({
      fruit_id: fruitId,
      color,
    }));

    await knex("fruit_colors").insert(colorInserts);
  }
}
