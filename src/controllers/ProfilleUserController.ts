import { Response, Request} from 'express'
import { ProfileUserService } from '../services/ProfilleUserService'

class ProfilleUserController {
    async handle(req: Request, res: Response){
        const service = new ProfileUserService;

        const { user_id } = req

        const result = await service.execute(user_id);
        return res.json(result);
    }
}

export { ProfilleUserController}