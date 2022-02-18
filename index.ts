import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { appRouter } from 'routes'

const app = new Koa()

app.use(bodyParser())
app.use(appRouter.routes()).use(appRouter.allowedMethods())

const port = process.env.PORT || 3001
app.listen(port, () =>
  console.log(`Starting services-lists-api on port ${port}`)
)
