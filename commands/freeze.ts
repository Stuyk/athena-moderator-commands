import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default function freeze(player: alt.Player, id: string) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    playerFuncs.safe.setPosition(target, target.pos.x, target.pos.y, target.pos.z);
    playerFuncs.set.frozen(target, true);
    playerFuncs.emit.message(player, `${target.data.name} was frozen.`);
    playerFuncs.emit.message(target, `You are now frozen.`);
}
