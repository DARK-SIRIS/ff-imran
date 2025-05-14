document.getElementById('fetchBtn').addEventListener('click', function() {
    const uid = document.getElementById('uid').value;
    if (uid) {
        fetch(`https://yourapi.com/get_user_data?uid=${uid}`) // Replace with your actual API
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('result');
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = `
                    <h2>📋 UID Info for: <span style="color:#FFD700;">${uid}</span></h2>
                    <p>👤 <b>Name:</b> ${data.name || '❌ Not Found'}</p>
                    <p>🆔 <b>ID:</b> ${data.id || '❌ Not Found'}</p>
                    <p>📅 <b>Account Created:</b> ${data.account_creation_date || '❌ Not Found'}</p>
                    <p>🌍 <b>Region:</b> ${data.region || '❌ Not Found'}</p>
                    <p>🚫 <b>Banned:</b> ${data.is_banned || '❌ Not Found'}</p>
                    <p>⏳ <b>Ban Period:</b> ${data.ban_period || '❌ Not Found'}</p>
                    <p>💚 <b>Developer:</b> @pro_code_x</p>
                `;
            })
            .catch(error => {
                const resultDiv = document.getElementById('result');
                resultDiv.style.display = 'block';
                resultDiv.classList.add('error');
                resultDiv.innerHTML = '❗ Unable to fetch data. Please check your UID.';
            });
    } else {
        alert('Please enter a UID.');
    }
});
