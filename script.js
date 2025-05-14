document.getElementById('lookup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const uid = document.getElementById('uid').value.trim();
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = '⏳ Loading...';

  fetch(`https://tele-tool.vercel.app/ff?id=${encodeURIComponent(uid)}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("API error");
      }
      return res.json();
    })
    .then(data => {
      resultBox.innerHTML = `
        <div class="card fade-in">
          <h2>📋 UID Info for: <span style="color:#FFD700;">${uid}</span></h2>
          <p>👤 <b>Name:</b> ${data.name || '❌ Not Found'}</p>
          <p>🆔 <b>ID:</b> ${data.id || '❌ Not Found'}</p>
          <p>📅 <b>Created:</b> ${data.account_creation_date || '❌ Not Found'}</p>
          <p>🌍 <b>Region:</b> ${data.region || '❌ Not Found'}</p>
          <p>🚫 <b>Banned:</b> ${data.is_banned || '❌ Not Found'}</p>
          <p>⏳ <b>Ban Period:</b> ${data.ban_period || '❌ Not Found'}</p>
          <p>💚 <b>Developer:</b> @pro_code_x</p>
        </div>
      `;
    })
    .catch(() => {
      resultBox.innerHTML = `<p class="error fade-in">❌ Failed to fetch data. Check your UID.</p>`;
    });
});
