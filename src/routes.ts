import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageControler';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfilleUserController } from './controllers/ProfilleUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticate';


const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated , new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated , new ProfilleUserController().handle)

export { router };