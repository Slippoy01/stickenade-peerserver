# Dedicated PeerServer untuk stickenade

Server ini berfungsi sebagai perantara (signaling) WebRTC untuk matchmaking dan pembuatan room game `stickenade`.

## Cara Deploy Gratis di Render.com (Singapura - 2 Menit):

1. **Buat Repository Baru di GitHub**:
   - Buka [github.com/new](https://github.com/new).
   - Beri nama: `stickenade-peerserver`.
   - Upload 2 file ini: `package.json` dan `server.js`.

2. **Deploy di Render.com**:
   - Buka [render.com](https://render.com) dan login (bisa via akun GitHub).
   - Klik **New +** -> Pilih **Web Service**.
   - Hubungkan ke repository `stickenade-peerserver` tadi.
   - Atur pengaturan:
     - **Name**: `stickenade-peer` (atau nama pilihanmu).
     - **Region**: Pilih **Singapore** (paling dekat dengan Indonesia, latensi cuma ~15 ms!).
     - **Branch**: `main`.
     - **Runtime**: `Node`.
     - **Build Command**: `npm install`.
     - **Start Command**: `npm start`.
     - **Instance Type**: `Free`.
   - Klik **Create Web Service**.

3. **Gunakan di Game**:
   - Setelah deploy selesai (Status: `Live`), Render akan memberikan domain HTTPS gratis, contoh:  
     `stickenade-peer.onrender.com`
   - Buka `js/network.js` di folder stickenade, lalu masukkan domain tersebut pada `CUSTOM_PEER_SERVER`:
     ```javascript
     const CUSTOM_PEER_SERVER = {
         enabled: true,
         host: 'stickenade-peer.onrender.com', // Ganti dengan domain Render milikmu
         port: 443,
         path: '/stickenade',
         secure: true
     };
     ```
