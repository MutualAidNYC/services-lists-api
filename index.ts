import Koa from 'koa'
import { appRouter } from 'routes'

const app = new Koa()

app.use(appRouter.routes()).use(appRouter.allowedMethods())

const port = process.env.PORT || 3001
app.listen(port, () =>
  console.log(`Starting services-lists-api on port ${port}`)
)
