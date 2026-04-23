import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password.length < 6) {
      setError('Min 6 characters')
      return
    }

    setError('')
    window.alert('Form submitted successfully')
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 360, display: 'grid', gap: '1rem' }}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{ display: 'block', width: '100%', marginTop: 4, padding: 8 }}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ display: 'block', width: '100%', marginTop: 4, padding: 8 }}
        />
      </div>

      {error ? <p role="alert" style={{ color: '#dc2626', margin: 0 }}>{error}</p> : null}

      <button type="submit">Login</button>
    </form>
  )
}
