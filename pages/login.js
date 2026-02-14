import { supabase } from '../lib/supabase'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message)
    else alert('Revisa tu correo para continuar')
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: 8, width: 250 }}
      />
      <button onClick={handleLogin} style={{ marginLeft: 8, padding: 8 }}>
        Enviar Magic Link
      </button>
    </div>
  )
}
