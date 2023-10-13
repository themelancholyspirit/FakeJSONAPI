const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const userRouter = require('./routes/user')
const commentRouter = require('./routes/comment')
const addressRouter = require('./routes/address')
const productRouter = require('./routes/product')

const app = express();

app.get('/', (req, res) => {
    res.redirect('/api-docs')
})

app.use('/users', userRouter)
app.use('/comments', commentRouter)
app.use('/addresses', addressRouter)
app.use('/products', productRouter)

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
