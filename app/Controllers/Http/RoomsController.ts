import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Room from 'App/Models/Room'


export default class RoomsController {
  public async index({}: HttpContextContract) {
    const listRooms = await Room.all()
    return listRooms
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only(['room_number', 'capacity', 'vacancy'])
    const room = await Room.create(data)
    return room
  }

  public async show({params}: HttpContextContract) {
    const room = await Room.findOrFail(params.id)
    return room
  }

  public async edit({}: HttpContextContract) {}

  public async update({request, params}: HttpContextContract) {
    const room = await Room.findOrFail(params.id)
    const data = request.only(['room_number', 'capacity', 'vacancy'])
    room?.merge(data)
    await room?.save()
    return room
  }

  public async destroy({params}: HttpContextContract) {
    const room = await Room.findOrFail(params.id)

    await room?.delete()
  }
}
