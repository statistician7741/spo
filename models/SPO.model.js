var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SPOSchema = new Schema({
    _id: String,
    date: Date,
    nama_kec: String,
    nama_desa: String,
    nama_sls: String,
    jml_keluarga_lengkap_clean: Number,
    jml_penduduk_clean: Number,
    berhasil_cek_nik: Number,
    beda_agama: String,
    beda_pendidikan: String,
    beda_status_perkawinan: String,
    beda_tgl_lahir: String,
    err_Perumahan: String,
    err_hub_kepala_keluarga: String,
    err_pekerjaan: String,
    err_pendidikan: String,
    err_status_kawin: String,
    err_status_kerja: String,
}, { collection: 'spo' });

module.exports = mongoose.model('SPO', SPOSchema);