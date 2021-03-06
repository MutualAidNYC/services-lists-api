import { AirtableClient } from 'clients'
import {
  Address,
  CreateServicesListRequest,
  Service,
  ServicesList,
  TaxonomyTerm,
} from 'models'

const ServicesClient = new AirtableClient(
  process.env.SERVICES_API_KEY ?? '',
  process.env.SERVICES_BASE_ID ?? ''
)

export const getServicesList = (id: string): Promise<ServicesList> => {
  return ServicesClient.getById<ServicesList>('Services Lists', id)
}

export const getService = (id: string): Promise<Service> => {
  return ServicesClient.getById<Service>('services', id)
}

export const getAddress = (id: string): Promise<Address> => {
  return ServicesClient.getById<Address>('physical_addresses', id)
}

export const getAllServicesLists = (
  filter?: string
): Promise<ServicesList[]> => {
  return ServicesClient.getAll<ServicesList>('Services Lists', filter)
}

export const getAllTaxonomies = (filter?: string): Promise<TaxonomyTerm[]> => {
  return ServicesClient.getAll<TaxonomyTerm>('taxonomy_term', filter)
}

export const getAllServices = (filter?: string): Promise<Service[]> => {
  return ServicesClient.getAll<Service>('services', filter)
}

export const createServicesLists = (
  servicesLists: CreateServicesListRequest[]
): Promise<ServicesList[]> => {
  if (servicesLists.length < 1) {
    return new Promise((resolve) => {
      resolve([])
    })
  }

  return ServicesClient.createRecords<CreateServicesListRequest, ServicesList>(
    'Services Lists',
    servicesLists.map((list) => {
      return {
        fields: {
          name: list.name,
          description: list.description,
          Status: list.Status,
          Services: list.Services,
          creator: list.creator,
        },
      }
    })
  )
}
