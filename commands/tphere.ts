import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default function tphere(player: alt.Player, id: string) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find id ${id}`);
        return;
    }

    playerFuncs.safe.setPosition(target, player.pos.x, player.pos.y, player.pos.z);
    playerFuncs.emit.message(player, `Teleported ${target.data.name} here.`);
}
