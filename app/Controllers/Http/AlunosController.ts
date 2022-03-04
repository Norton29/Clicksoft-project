import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Aluno from 'App/Models/Aluno'

export default class AlunosController {
  public async index({}: HttpContextContract) {
    const listAlunos = await Aluno.all()

    return listAlunos
  }

  public async create({}: HttpContextContract) {}

  public async store({ request}: HttpContextContract) {
    const data = request.only(['Name', 'email', 'Matrícula', 'Data de nascimento'])
    const insert = await Aluno.create(data)
    return insert
  }

  public async show({params}: HttpContextContract) {
    const user = await Aluno.findBy(params.Name, params.string)

    return user
  }

  public async update({request, params}: HttpContextContract) {
    const user = await Aluno.findBy(params.Name, params.string)
    const data = request.only(['Name', 'email', 'Matrícula', 'Data de nascimento'])

    user?.merge(data)
    await user?.save()
    return user
  }

  public async destroy({params}: HttpContextContract) {
    const user = await Aluno.findBy(params.Name, params.string)

    await user?.delete()
  }
}
