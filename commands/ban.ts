import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';
import { AdminController } from '../../../server/systems/admin';
import { PERMISSIONS } from '../../../shared/flags/PermissionFlags';
import { isFlagEnabled } from '../../../shared/utility/flags';

export default async function ban(player: alt.Player, id: string, ...args: string[]) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    if (isFlagEnabled(target.accountData.permissionLevel, PERMISSIONS.ADMIN)) {
        playerFuncs.emit.message(player, `You cannot ban other Administrators`);
        return;
    }

    if (target.id === player.id) {
        playerFuncs.emit.message(player, `You cannot ban yourself.`);
        return;
    }

    let reason = `No Reason - Banned by ${player.data.name}`;

    if (args.length >= 1) {
        reason = args.join(``);
        reason += ` - Banned by ${player.data.name}`;
    }

    await AdminController.banPlayer(target, reason);
    alt.logWarning(`${target.data.name} was banned by ${player.data.name}`);
}
