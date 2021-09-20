import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';
import { AdminController } from '../../../server/systems/admin';

export default async function ban(player: alt.Player, discordIdentifier: string) {
    if (!player || !player.valid) {
        return;
    }

    const didUnban = await AdminController.unbanPlayer(discordIdentifier);
    if (didUnban) {
        playerFuncs.emit.message(player, `Unbanned ${discordIdentifier} (Discord)`);
        alt.logWarning(`${discordIdentifier} (Discord) was unbanned by ${player.data.name}`);
        return;
    }

    playerFuncs.emit.message(player, `Could not find that account with Discord ID: ${discordIdentifier}`);
}
