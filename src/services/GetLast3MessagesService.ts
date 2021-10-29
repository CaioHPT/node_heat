import primaClient from '../prisma'

class GetLast3MessagesService{
    async execute(){
        const messages = await primaClient.message.findMany({
            take: 3,
            orderBy: {
                create_atd: "desc"
            },
            include:{
                user:true
            }
        })
        
        return messages
    }
}

export { GetLast3MessagesService }