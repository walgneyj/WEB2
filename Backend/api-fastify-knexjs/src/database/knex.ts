import {knex as knexConfing} from "knex";
import  config from "../../knexfile";

export const knex = knexConfing(config)