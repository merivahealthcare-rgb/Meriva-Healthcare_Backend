const createClient =require('@supabase/supabase-js')
const config = require("./config.js")


// Create a single supabase client for interacting with your database
const supabase = createClient(`https://${config.HOST}`,config.SUPABASE_PUBLISHABLE_KEY)

module.exports = supabase