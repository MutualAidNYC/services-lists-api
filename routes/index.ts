import Router from '@koa/router'
import { services } from './services'

export const appRouter = new Router()

appRouter.use(services.routes()).use(services.allowedMethods())
