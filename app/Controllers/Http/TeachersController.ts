import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async index({}: HttpContextContract) {
    const listStundent = await Teacher.all()

    return listStundent
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    const insert = await Teacher.create(data)
    return insert
  }

  public async show({params}: HttpContextContract) {
    const user = await Teacher.findOrFail(params.id)
    return user
  }

  public async update({request, params}: HttpContextContract) {
    const user = await Teacher.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date'])

    user?.merge(data)
    await user?.save()
    return user
  }

  public async destroy({params}: HttpContextContract) {
    const user = await Teacher.findOrFail(params.id)

    await user?.delete()
  }
}
