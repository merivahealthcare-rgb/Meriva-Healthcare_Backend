const dotenv=require("dotenv");
dotenv.config();

const config = {
    HOST: process.env.SUPABASE_HOST,
    PORT: process.env.SUPABASE_PORT,
    DATABASE: process.env.SUPABASE_DATABASE,
    USER: process.env.SUPABASE_USER,
    PASSWORD: process.env.SUPABASE_PASSWORD,
    SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY
}

module.exports = config;