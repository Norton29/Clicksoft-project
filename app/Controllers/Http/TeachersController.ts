import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Teacher from 'App/Models/Teacher';



export default class UsersController {
  public async index({}: HttpContextContract) {
    const listTeachers = await Teacher.all()
    return listTeachers
  }

  public async store({request}: HttpContextContract) {
    const data = request.only(['name', 'email', 'registration', 'birth_date', 'user_type'])
    const teacher = await Teacher.create(data); 
    return teacher
  }

  public async show({params}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)
    return teacher
  }

  public async update({params, request}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date', 'user_type'])
    const update = teacher?.merge(data)
    await update?.save()    
    return update
  }

  public async destroy({params}: HttpContextContract) {
    const teacher = await Teacher.findOrFail(params.id);

    await teacher?.delete()
  }
}
