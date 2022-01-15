import ChatController from '../../../server/systems/chat';
import { PERMISSIONS } from '../../../shared/flags/permissionFlags';
import { handleBanCmd } from './commands/ban';
import { handleGethereCmd } from './commands/gethere';
import { handleGotoCmd } from './commands/goto';
import { handleInfoCmd } from './commands/info';
import { handleKickCmd } from './commands/kick';
import { handleRefillCmd } from './commands/refillVehicle';
import { handleRepairVehicleCmd } from './commands/repairVehicle';
import { handleDimensionCmd } from './commands/setdimension';
import { handleInteriorCmd } from './commands/setinterior';
import { handleUnbanCmd } from './commands/unban';

ChatController.addCommand('setinterior', '/setinterior <ID> <INTERIOR>', PERMISSIONS.ADMIN, handleInteriorCmd);

ChatController.addCommand('setdimension', '/setdimension <ID> <DIMENSION>', PERMISSIONS.ADMIN, handleDimensionCmd);

ChatController.addCommand('kick', '/kick <ID> <REASON>', PERMISSIONS.ADMIN, handleKickCmd);

ChatController.addCommand('ban', '/ban <ID> <REASON> - Bans a player.', PERMISSIONS.ADMIN, handleBanCmd);

ChatController.addCommand('unban', '/unban <DISCORDIDENTIFIER> - Unbans a player by discord ID', PERMISSIONS.ADMIN, handleUnbanCmd);

ChatController.addCommand(
    'gethere',
    '/gethere <ID> - Teleports a player to your position.',
    PERMISSIONS.ADMIN,
    handleGethereCmd,
);

ChatController.addCommand(
    'goto',
    '/goto <ID> - Teleports you to the specified player.',
    PERMISSIONS.ADMIN,
    handleGotoCmd,
);

ChatController.addCommand(
    'info',
    '/info <ID> - Get account info for the specified id.',
    PERMISSIONS.ADMIN,
    handleInfoCmd,
);

ChatController.addCommand(
    'refillVehicle',
    '/refillVehicle - Refills fuel of an vehicle by administrative power.',
    PERMISSIONS.ADMIN,
    handleRefillCmd,
);

ChatController.addCommand(
    'repairVehicle',
    '/repairVehicle - Repairs an vehicle by administrative power.',
    PERMISSIONS.ADMIN,
    handleRepairVehicleCmd,
);
