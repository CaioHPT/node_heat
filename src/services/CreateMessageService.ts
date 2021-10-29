import  prismaClient  from '../prisma'

import { io } from '../app'

class CreateMessageService{
    async execute(texto:string, user_id:string){
        const message = await prismaClient.message.create({
            data: {
                texto,
                user_id
            },
            include:{
                user: true
            }
        })

        const info = {
            text: message.texto,
            user_id: message.user_id,
            create_at: message.create_atd,
            user:{
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }

        io.emit("new_message", info)

        return message;
    }
}

export { CreateMessageService }