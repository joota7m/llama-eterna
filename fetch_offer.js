const { createClient } = require('@supabase/supabase-js');
const url = 'https://xedyxmkhzsnclkcuzezq.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlZHl4bWtoenNuY2xrY3V6ZXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTE4MzYsImV4cCI6MjA5MTI2NzgzNn0.nw_VQGfoCmXbFDmqd6TQtbCH7pUJACdZ8sgTl15wd8c';
const supabase = createClient(url, key);
async function run() {
  const { data, error } = await supabase.from('offer_settings').select('*').limit(1).single();
  console.log(JSON.stringify(data, null, 2));
}
run();
