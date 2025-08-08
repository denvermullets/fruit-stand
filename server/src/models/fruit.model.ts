import db from "../database/db";

export type Fruit = {
  id: number;
  name: string;
  in_season: boolean;
};

// normally i'd put this elsewhere
type FruitResponse = {
  name: string;
  in_season: boolean;
  colors: string[];
};

const fruitModel = {
  findFruits: async (filters: {
    inSeason?: boolean;
    color?: string;
    name?: string;
  }): Promise<FruitResponse[]> => {
    const { inSeason, color, name } = filters;

    const fruitsQuery = db<Fruit>("fruits")
      .leftJoin("fruit_colors", "fruits.id", "fruit_colors.fruit_id")
      .groupBy("fruits.name", "fruits.in_season")
      .select(
        "fruits.name",
        db.raw("array_remove(array_agg(fruit_colors.color), NULL) as colors"),
        "fruits.in_season"
      );

    // color
    if (color !== undefined) {
      fruitsQuery.whereExists(function () {
        this.select("*")
          .from("fruit_colors")
          .whereRaw("fruit_colors.fruit_id = fruits.id")
          .andWhere("fruit_colors.color", color);
      });
    }

    // in_season
    if (inSeason !== undefined) {
      fruitsQuery.andWhere("fruits.in_season", inSeason);
    }

    // name
    if (name !== undefined) {
      fruitsQuery.andWhere("fruits.name", "ilike", `%${name}%`);
    }

    const fruits = await fruitsQuery;

    return fruits;
  },
};

export default fruitModel;
