# GURUKU App - Final Project Engineering 73

## Requirements

- Ada 2 user, guru dan siswa
- Sebagai user(Guru) saya bisa login, register
- Sebagai user(Guru) saya bisa melihat dan mengedit profil saya
- Sebagai user(Guru) saya bisa melihat semua siswa yang melakukan transaksi kepada saya
- Sebagai user(Guru) saya bisa melihat profil siswa yang mendaftar ke saya

- Sebagai user(Siswa) saya bisa login, register dan logout
- Sebagai user(Siswa) saya bisa melihat dan mengedit profil saya
- Sebagai user(Siswa) saya bisa melihat semua kategori jenjang kelas dan mata pelajaran
- Sebagai user(Siswa) saya bisa melihat mencari dan profil user(Guru)
- Sebagai user(Siswa) saya bisa melakukan pendaftaran sebagai murid atau transaksi ke satu guru atau lebih
- Sebagai user(Siswa) saya bisa melihat riwayat transaksi saya


## Available APIs

- `POST`: `/api/login/siswa`
- `POST`: `/api/login/guru`
- `POST`: `/api/register/siswa`
- `POST`: `/api/register/guru`
- `GET`: `/api/guru/dashboard/<id_guru>`
- `GET`: `/api/guru/profile/<id_guru>`
- `PUT`: `/api/guru/profileUpdate/<id_guru>`
- `GET`: `/api/guru/dataTransaksi/siswa/profile/<id_siswa>`

- `GET` : `/api/siswa/dashboard/<id_siswa>`
- `GET`: `/api/siswa/kategori/mapel`
- `GET`: `/api/siswa/kategori/kelas`
- `GET`: `/api/siswa/guru/mapel/<id_mapel>`
- `GET`: `/api/siswa/guru/kelas/<id_kelas>`
- `GET`: `/api/siswa/guru/<id_guru>`
- `GET` : `/api/siswa/profile/<id_siswa>`
