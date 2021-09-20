import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default function unfreeze(player: alt.Player, id: string) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    playerFuncs.set.frozen(target, false);
    playerFuncs.emit.message(player, `${target.data.name} was unfrozen.`);
    playerFuncs.emit.message(target, `You are now unfrozen.`);
}
