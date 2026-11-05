/**
 * stickenade - Dedicated WebRTC PeerJS Signaling Server
 * Deployable to Render.com, Koyeb, Railway, or VPS
 */

const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
    port: parseInt(port, 10),
    path: '/stickenade',
    allow_discovery: true,
    proxied: true // Essential for cloud SSL reverse proxy (Render / Koyeb)
});

console.log(`===============================================`);
console.log(`[stickenade] Dedicated PeerServer is RUNNING!`);
console.log(`Port: ${port}`);
console.log(`Path: /stickenade`);
console.log(`===============================================`);

peerServer.on('connection', (client) => {
    console.log(`[PeerServer] Player connected with ID: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
    console.log(`[PeerServer] Player disconnected: ${client.getId()}`);
});
