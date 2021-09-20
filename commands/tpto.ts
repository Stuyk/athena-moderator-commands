import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default function tpto(player: alt.Player, id: string) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    playerFuncs.safe.setPosition(player, target.pos.x, target.pos.y, target.pos.z);
    playerFuncs.emit.message(player, `Teleported to ${target.data.name}`);
}
