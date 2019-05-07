var exp = require('express');
var app = exp();

var bodyParser = require("body-parser");
var linkencParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

var path = require('path');
var cors = require("cors");
var cor = cors();

app.use(cor);
app.use(exp.static(path.join(__dirname, "../public")));

var molen = require('../model/molen.js');
var lapak = require('../model/molen_lapak.js');
var user  = require('../model/molen_user.js');

app.get('/api/molen/',function(req, res){ // Menampilkan list barang
    molen.getDataBarang(function(err,result){
        if(!err) {
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    });
});

app.get('/api/molen/barang',function(req, res){ // Menampilkan list barang
    molen.getDataBarang(function(err,result){
        if(!err) {
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    });
});

app.post('/api/molen/barang', linkencParser, jsonParser, function(req,res){ //insert data barang
    var iduser = req.body.iduser;
    var nama = req.body.nama;
    var pemilik = req.body.pemilik;
    var no_telp = req.body.no_telp;
    var stok = req.body.stok;
    var keterangan = req.body.keterangan;
    var kategori = req.body.kategori;
   
    molen.insertBarang(iduser,pemilik,no_telp,nama,stok,keterangan,kategori, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Tersimpan');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})

app.post('/api/molen/barang/:idbarang', linkencParser, jsonParser, function(req,res){ //update data barang
    var idbarang = req.params.idbarang;
    var nama = req.body.nama;
    var no_telp = req.body.no_telp;
    var stok = req.body.stok;
    var keterangan = req.body.keterangan;
    var kategori = req.body.kategori;
   
    molen.updateBarang(idbarang,nama,no_telp,stok,keterangan,kategori, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Terupdate');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
}) 


app.delete('/api/molen/barang/:idbarang',function(req,res){ //delete data barang
    var idbarang = req.params.idbarang;

    molen.deleteBarang(idbarang,function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Deleted ');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})

app.get('/api/molen/lapak/', function(req,res) {
    lapak.getListLapak(function(err,result){
        if(!err){
            console.log(result);
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    });
})

app.get('/api/molen/user/list', function(req,res) {
    user.getDataUser(function(err,result){
        if(!err){
            console.log(result);
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/api/molen/user/login/', linkencParser, jsonParser,function(req,res) {
    var email = req.body.email;
    var password = req.body.password;

    user.loginUser(email,password, function(err,result){
        if(!err) {
            if(result.length > 0)
            {
                res.send('Login Success');
            }
        }
        else {
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/api/molen/barang/:id_barang/komentar',linkencParser, jsonParser, function(req,res){
    var nama = req.body.nama;
    var komentar = req.body.komentar;
    var id_barang = req.body.barang;
    var id_user = req.body.user;

    molen.updateComment(id_barang,id_user,nama,komentar, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Tersimpan');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})

app.post('/api/molen/barang/:id_barang/komentar/:id_comment',linkencParser, jsonParser, function(req,res){
    var id_comment = req.params.id_comment;
    var nama = req.body.nama;
    var komentar = req.body.komentar;
    var id_barang = req.params.barang;
    var id_user = req.body.user;

    molen.updateComment(id_comment,id_barang,id_user,nama,komentar, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Tersimpan');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})


app.delete('/api/molen/barang/:id_barang/komentar/:id_comment',linkencParser, jsonParser, function(req,res){
    var id_comment = req.params.id_comment;

    molen.deleteComment(id_comment,function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Terhapus');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})


app.get('/api/molen/barang/:id_barang/komentar/:id_comment',linkencParser, jsonParser,function(req, res){ // Menampilkan list barang
    //var id_comment = req.params.id_comment;
    var id_barang = req.params.id_barang;

    molen.showComment(id_barang, function(err,result){
        if(!err) {
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    })
})

app.get('/api/molen/user/:email/profile',function(req,res) {
    var email = req.params.email;

    user.getUserbyEmail(email,function(err,result){
        if(!err){
            console.log(result);
            res.send(result);
        }

        else {
            console.log(err);
            res.send(err);
        }
    })
})

app.post('/api/molen/user', linkencParser, jsonParser, function(req,res){ //insert data barang
    //email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp,
    var email = req.body.email;
    var password = req.body.password;
    var nama = req.body.nama;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat = req.body.alamat;
    var kota = req.body.kota;
    var provinsi = req.body.provinsi;
    var no_telp = req.body.no_telp;
   
    user.addUser(email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Tersimpan');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})

app.post('/api/molen/user/:id_user/', linkencParser, jsonParser, function(req,res){ //insert data barang
    //email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp,
    var id_user = req.params.id_user;
    var email = req.body.email;
    var password = req.body.password;
    var nama = req.body.nama;
    var tgl_lahir = req.body.tgl_lahir;
    var alamat = req.body.alamat;
    var kota = req.body.kota;
    var provinsi = req.body.provinsi;
    var no_telp = req.body.no_telp;
   
    user.updateUser(email, password, nama, id_user,tgl_lahir,alamat,kota,provinsi,no_telp, function(err,result){
        if(!err) {
            console.log(result);
            res.send(result.affectedRows + ' Data Terupdate');
        }

        else {
            console.log(err);
            res.send(err.code);
        }
    })
})


module.exports = app;