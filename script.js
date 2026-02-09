// script.js - Supabase integration with environment variables

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function handleSignup(email, password) {
    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        console.log('Signup successful:', user);
    } catch (error) {
        console.error('Error during signup:', error.message);
        alert('Signup failed: ' + error.message);
    }
}

async function handleLogin(email, password) {
    try {
        const { user, error } = await supabase.auth.signIn({ email, password });
        if (error) throw error;
        console.log('Login successful:', user);
    } catch (error) {
        console.error('Error during login:', error.message);
        alert('Login failed: ' + error.message);
    }
}

async function saveUserData(data) {
    try {
        const { error } = await supabase.from('users').insert([data]);
        if (error) throw error;
        console.log('User data saved successfully.');
    } catch (error) {
        console.error('Error saving user data:', error.message);
        alert('Failed to save user data: ' + error.message);
    }
}

function openSnackModal(snacks) {
    try {
        // Code to open modal and display snacks
        console.log('Snack modal opened with snacks:', snacks);
    } catch (error) {
        console.error('Error opening snack modal:', error.message);
        alert('Failed to open snack modal: ' + error.message);
    }
}

async function submitRating(snackId, rating) {
    try {
        const { error } = await supabase.from('ratings').insert([{ snack_id: snackId, rating }]);
        if (error) throw error;
        console.log('Rating submitted successfully for snack:', snackId);
    } catch (error) {
        console.error('Error submitting rating:', error.message);
        alert('Failed to submit rating: ' + error.message);
    }
}
