import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqliteClient = new Database('./sqlite.db');

export const database = drizzle(sqliteClient);
