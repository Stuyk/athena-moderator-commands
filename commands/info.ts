import * as alt from 'alt-server';
import { playerFuncs } from '../../../server/extensions/Player';

export default async function info(player: alt.Player, id: string) {
    if (!player || !player.valid) {
        return;
    }

    const target = alt.Player.all.find((p) => p.id.toString() === id);

    if (!target) {
        playerFuncs.emit.message(player, `Could not find account info for ${id}`);
        return;
    }

    if (!target.accountData) {
        playerFuncs.emit.message(player, `Could not find account info for ${id}`);
        return;
    }

    const dataToSend = [];

    dataToSend.push(`--- INFO FOR ${target.data.name} ---`);
    dataToSend.push(`ACCOUNT: ${target.data.account_id.toString()}`);
    dataToSend.push(`DISCORD: ${target.accountData.discord}`);
    dataToSend.push(`IPs: ${JSON.stringify(target.accountData.ips)}`);
    dataToSend.push(`PERMISSION LEVEL: ${target.accountData.permissionLevel}`);
    dataToSend.push(`HARDWARE: ${target.accountData.hardware}`);
    dataToSend.push(`--- --- ---`);

    for (let i = 0; i < dataToSend.length; i++) {
        playerFuncs.emit.message(player, dataToSend[i]);
    }
}
