const formidable = require("formidable");
const async = require('async');
const moment = require('moment');
const xlsx = require("node-xlsx").default;

const SPO = require('../../models/SPO.model')

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();
    const file_name = `${moment().format('YYYYMMDD_HHmmss')}_imported_spo.xlsx`
    const file_path = __dirname + "/../../temp/";
    async.auto(
        {
            parseExcel: cb => {
                form.parse(req, function (err, fields, file) {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                    const data = xlsx.parse(`${file_path}${file_name}`);
                    cb(err, data[0].data);
                });

                form.on("fileBegin", function (name, file) {
                    file.path = `${file_path}${file_name}`;
                });
            },
        }, (err, finish) => {
            if(err){
                res.sendStatus(500)
                return;
            }
            const formatDate = `${finish.parseExcel[0][1]}-${finish.parseExcel[1][1]}-${finish.parseExcel[2][1]}`;
            const date = moment(formatDate, "DD-M-YYYY")
            let data = []
            finish.parseExcel.forEach((row, i, arr) => {
                if(i>3){
                    row[2]&&data.push({
                        _id: `${formatDate}_${row[0].replace(/\W/g, '')}${row[1].replace(/\W/g, '')}${row[2].replace(/\W/g, '')}`,
                        date: date,
                        nama_kec: row[0],
                        nama_desa: row[1],
                        nama_sls: row[2],
                        jml_keluarga_lengkap_clean: row[3],
                        jml_penduduk_clean: row[4],
                        berhasil_cek_nik: row[5],
                        beda_agama: row[6],
                        beda_pendidikan: row[7],
                        beda_status_perkawinan: row[8],
                        beda_tgl_lahir: row[9],
                        err_Perumahan: row[10],
                        err_hub_kepala_keluarga: row[11],
                        err_pekerjaan: row[12],
                        err_pendidikan: row[13],
                        err_status_kawin: row[14],
                        err_status_kerja: row[15],
                    })
                }
            })
            SPO.insertMany(data, { ordered: false }, (err, docs)=>{
                if(err){
                    res.sendStatus(500)
                    return
                } else{
                    res.sendStatus(200)
                }
            });
        }
    )
}