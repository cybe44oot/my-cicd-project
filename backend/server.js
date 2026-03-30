const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'UP', message: 'Backend is running!' })
})

// Get pipeline info
app.get('/api/info', (req, res) => {
  res.json({
    app: 'My CI/CD Project',
    version: '2.0.0',
    tools: ['Docker', 'SonarQube', 'Trivy', 'GitHub Actions'],
    backend: 'Node.js + Express',
    status: 'All systems operational'
  })
})

// Get stats (fake data for learning)
app.get('/api/stats', (req, res) => {
  res.json({
    builds: 42,
    deployments: 18,
    vulnerabilities: 0,
    codeQuality: 'A'
  })
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
