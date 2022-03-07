import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Room from 'App/Models/Room';


export default class RoomsController {

        public async index({}: HttpContextContract) {
          const listRooms = await Room.all()
          return listRooms
        }
      
        public async store({request}: HttpContextContract) {
          const {teacher_id, room_number, capacity, vacancy, student_id} = request.all()
          const room = await Room.create({teacher_id, room_number, capacity, vacancy});
          await room.related('students').attach([student_id])                       
          return room
        }
      
        public async show({params}: HttpContextContract) {
          const room = await Room.findOrFail(params.id)
          return room
        }
      
        public async update({params, request}: HttpContextContract) {
          const room = await Room.findOrFail(params.id)
          const data = request.only(['teacher_id', 'room_number', 'capacity', 'vacancy'])
          room?.merge(data)
          await room?.save()
          return room
        }
      
        public async destroy({params}: HttpContextContract) {
          const room = await Room.findOrFail(params.id)
          await room?.delete()
        }
}

