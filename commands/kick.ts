import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';
import { PERMISSIONS } from '../../../shared/flags/PermissionFlags';
import { isFlagEnabled } from '../../../shared/utility/flags';

export default function kick(player: alt.Player, id: string, ...args: string[]) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    if (isFlagEnabled(target.accountData.permissionLevel, PERMISSIONS.ADMIN)) {
        playerFuncs.emit.message(player, `You cannot kick other Administrators`);
        return;
    }

    if (target.id === player.id) {
        playerFuncs.emit.message(player, `You cannot kick yourself.`);
        return;
    }

    let reason = 'no reason specified';

    if (args.length >= 1) {
        reason = args.join(' ');
    }

    target.kick(reason);
    alt.logWarning(`${target.data.name} was kicked by ${player.data.name}`);
}
