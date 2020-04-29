const express = require('express')
const authRoutes = require('./routes/auth')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const categoryRoutes = require('./routes/category')
const analyticsRoutes = require('./routes/analytics')
const app = express()

app.use('/api/auth', authRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/analytics', analyticsRoutes)



module.exports = app
