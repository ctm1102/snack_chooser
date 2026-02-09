// script.js

const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch data from Supabase
async function fetchData() {
    try {
        const { data, error } = await supabase
            .from('your_table_name')
            .select('*');

        if (error) throw error;

        if (data.length === 0) {
            console.log('No data found');
        } else {
            console.log('Data fetched:', data);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Function to insert data into Supabase
async function insertData(newData) {
    try {
        const { data, error } = await supabase
            .from('your_table_name')
            .insert([newData]);

        if (error) throw error;

        console.log('Data inserted:', data);
    } catch (error) {
        console.error('Error inserting data:', error.message);
    }
}

// Function to update data in Supabase
async function updateData(id, updatedData) {
    try {
        const { data, error } = await supabase
            .from('your_table_name')
            .update(updatedData)
            .eq('id', id);

        if (error) throw error;

        console.log('Data updated:', data);
    } catch (error) {
        console.error('Error updating data:', error.message);
    }
}

// Function to delete data from Supabase
async function deleteData(id) {
    try {
        const { data, error } = await supabase
            .from('your_table_name')
            .delete()
            .eq('id', id);

        if (error) throw error;

        console.log('Data deleted:', data);
    } catch (error) {
        console.error('Error deleting data:', error.message);
    }
}

// User feedback messages and function calls can be added as needed
// Example usage:
// fetchData();
// insertData({ name: 'John Doe' });
// updateData(1, { name: 'Jane Doe' });
// deleteData(1);