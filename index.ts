/**
 * Make sure to import this file in `src/core/plugins/imports.ts`.
 */
import ChatController from '../../server/systems/chat';
import Logger from '../../server/utility/athenaLogger';
import { PERMISSIONS } from '../../shared/flags/PermissionFlags';
import apm from './commands/apm';
import ban from './commands/ban';
import freeze from './commands/freeze';
import info from './commands/info';
import kick from './commands/kick';
import tphere from './commands/tphere';
import tpto from './commands/tpto';
import unban from './commands/unban';
import unfreeze from './commands/unfreeze';

ChatController.addCommand('kick', '/kick [in-game id] [?...reason]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, kick);
ChatController.addCommand('ban', '/ban [in-game id] [?...reason]', PERMISSIONS.ADMIN, ban);
ChatController.addCommand('unban', '/unban [discord id] [?...reason]', PERMISSIONS.ADMIN, unban);
ChatController.addCommand('info', '/info [in-game id]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, info);
ChatController.addCommand('tphere', '/tphere [in-game id]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, tphere);
ChatController.addCommand('tpto', '/tpto [in-game id]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, tpto);
ChatController.addCommand('freeze', '/freeze [in-game id]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, freeze);
ChatController.addCommand('unfreeze', '/unfreeze [in-game id]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, unfreeze);
ChatController.addCommand('apm', '/apm [in-game id] [?...message]', PERMISSIONS.MODERATOR | PERMISSIONS.ADMIN, apm);

Logger.info(`Plugin Loaded -- Mod Commands -- by Stuyk`);
