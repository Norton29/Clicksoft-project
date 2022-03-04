import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'


export default class StundentsController {
  public async index({}: HttpContextContract) {
    const listStundent = await Student.all()
    return listStundent
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    const insert = await Student.create(data)
    return insert
  }

  public async show({params}: HttpContextContract) {
    const user = await Student.findOrFail(params.id)
    return user
  }

  public async update({request, params}: HttpContextContract) {
    const user = await Student.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    user?.merge(data)
    await user?.save()
    return user
  }

  public async destroy({params}: HttpContextContract) {
    const user = await Student.findOrFail(params.id)

    await user?.delete()
  }
}
