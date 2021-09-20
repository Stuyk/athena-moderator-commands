import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default function apm(player: alt.Player, id: string, ...args: string[]) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    if (!args || args.length <= 0) {
        playerFuncs.emit.message(player, `Must specify what to send after in-game id.`);
        return;
    }

    let msg = `{FF0000}[APM] ${player.data.name}: ${args.join(' ')}`;
    playerFuncs.emit.message(player, msg);
    playerFuncs.emit.message(target, msg);
}
