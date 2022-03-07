import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'


export default class UsersController {
  public async index({}: HttpContextContract) {
    const listStudents = await Student.all()
    return listStudents
  }

  public async store({request}: HttpContextContract) {
    const {room, ...data} = request.only(['name', 'email', 'registration', 'birth_date'])
    const student = await Student.create(data);    
    return student
  }

  public async show({params}: HttpContextContract) {
    const student = await Student.findOrFail(params.id)
    return student
  }

  public async update({params, request}: HttpContextContract) {
    const student = await Student.findOrFail(params.id)
    const data = request.only(['name', 'email', 'registration', 'birth_date'])
    student?.merge(data)
    await student?.save()
    return student
  }

  public async destroy({params}: HttpContextContract) {
    const student = await Student.findOrFail(params.id)
    await student?.delete()
  }
}
