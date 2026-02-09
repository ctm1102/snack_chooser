// Corrected Supabase integration and error handling code
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
    try {
        let { data, error, status } = await supabase
            .from('your-table')
            .select('*');

        if (error && status !== 406) throw error;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchData();