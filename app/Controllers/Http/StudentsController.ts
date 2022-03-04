import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Students from 'App/Models/Students'


export default class AlunosController {
  public async index({}: HttpContextContract) {
    const listStundent = await Students.all()

    return listStundent
  }

  public async create({}: HttpContextContract) {}

  public async store({ request}: HttpContextContract) {
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    const insert = await Students.create(data)
    return insert
  }

  public async show({params}: HttpContextContract) {
    const user = await Students.findOrFail(params.id)
    return user
  }

  public async update({request, params}: HttpContextContract) {
    const user = await Students.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date'])

    user?.merge(data)
    await user?.save()
    return user
  }

  public async destroy({params}: HttpContextContract) {
    const user = await Students.findOrFail(params.id)

    await user?.delete()
  }
}
