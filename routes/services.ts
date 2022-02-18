import Router from '@koa/router'
import {
  createServicesLists,
  getAddress,
  getAllServices,
  getAllServicesLists,
  getAllTaxonomies,
  getService,
  getServicesList,
} from 'middlewares'
import { CreateServicesListRequest } from 'models'

export const services = new Router()

services.get('/services', async (ctx) => {
  const filter = ctx.query.filter as string
  const services = await getAllServices(filter)

  ctx.body = services
})

services.get('/taxonomies', async (ctx) => {
  const filter = ctx.query.filter as string
  const taxonomies = await getAllTaxonomies(filter)

  ctx.body = taxonomies
})

services.get('/services-lists', async (ctx) => {
  const filter = ctx.query.filter as string
  const servicesLists = await getAllServicesLists(filter)

  ctx.body = servicesLists
})

services.get('/services/:id', async (ctx) => {
  const id = ctx.params.id
  const service = await getService(id)

  ctx.body = service
})

services.get('/addresses/:id', async (ctx) => {
  const id = ctx.params.id
  const address = await getAddress(id)

  ctx.body = address
})

services.get('/services-lists/:id', async (ctx) => {
  const id = ctx.params.id
  const servicesList = await getServicesList(id)

  ctx.body = servicesList
})

services.post('/services-lists', async (ctx) => {
  const reqBody = ctx.request.body as CreateServicesListRequest[]
  const res = await createServicesLists(reqBody)

  ctx.body = res.map((servicesList) => servicesList.id)
})
