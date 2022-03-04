import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'

export default class TeachersController {
  public async index({}: HttpContextContract) {
    const listTeachers = await Teacher.all()

    return listTeachers
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    const teacher = await Teacher.create(data)
    return teacher
  }

  public async show({params}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)
    return teacher
  }

  public async update({request, params}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date'])

    teacher?.merge(data)
    await teacher?.save()
    return teacher
  }

  public async destroy({params}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)

    await teacher?.delete()
  }
}
