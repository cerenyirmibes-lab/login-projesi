import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giriş yapıldı mı kontrolü

  const isEmailValid = email.includes('@') && email.includes('.');
  const isPasswordValid = password.length >= 6;
  const isFormValid = isEmailValid && isPasswordValid && terms;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoggedIn(true); // Girişi onayla
    }
  };

  // EĞER GİRİŞ YAPILDIYSA BU EKRANI GÖSTER
  if (isLoggedIn) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: 'green' }}>
        <h1>🎉 Tebrikler!</h1>
        <p>Başarıyla giriş yaptınız. Ödevin bu aşaması tamamlandı!</p>
        <button onClick={() => setIsLoggedIn(false)}>Geri Dön</button>
      </div>
    );
  }

  // GİRİŞ YAPILMADIYSA FORMU GÖSTER
  return (
    <div style={{ padding: '20px', border: '2px solid blue', borderRadius: '8px', width: '300px', margin: '20px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Giriş Yap</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Şifre" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <label style={{ fontSize: '12px' }}>
          <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} /> 
          Şartları kabul ediyorum
        </label>
        
        <button 
          disabled={!isFormValid} 
          type="submit"
          style={{ 
            backgroundColor: isFormValid ? '#4CAF50' : '#ccc', 
            color: 'white', 
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: isFormValid ? 'pointer' : 'not-allowed' 
          }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}