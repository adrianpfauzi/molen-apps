var pool = require('./dbConfig.js');
var molenDB = {
    
    // Function to Barang Process

    getDataBarang: function(callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'SELECT * FROM barang_data';
                conn.query(sql,function(err, result){
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    searchBarang: function(nama,callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'SELECT * FROM barang_data WHERE `nama` = ?';
                conn.query(sql,[nama],function(err, result){
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    deleteBarang: function(idbarang, callback) {
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected!");
                var sql = "DELETE FROM barang_data WHERE id_barang=?";
                conn.query(sql, [idbarang], function(err,result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    updateBarang:function(idbarang,nama,no_telp,stok,keterangan,kategori,callback) {
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                console.log(idbarang);
                var sql = 'UPDATE barang_data SET `nama`=?, `no_telp`= ?, `stok`=?, `keterangan`=?, `kategori`=? WHERE id_barang = ?';
                conn.query(sql,[nama,no_telp,stok,keterangan,kategori,idbarang,],function(err,result) {
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(err);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    insertBarang:function(iduser,pemilik,no_telp,nama,stok,keterangan,kategori,callback) {
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'INSERT INTO barang_data(id_user,`pemilik`, `no_telp`, `nama`, `stok`, `keterangan`,`kategori`) VALUES (?,?,?,?,?,?,?)';
                conn.query(sql, [iduser,pemilik,no_telp,nama,stok,keterangan,kategori],function(err,result) {
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(err);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    insertComment:function(id_barang,id_user,nama,komentar,callback){
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'INSERT INTO comment(id_barang, id_user, `nama`, `komentar`) VALUES (?,?,?,?)';
                conn.query(sql, [id_barang,id_user,nama,komentar],function(err,result) {
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(err);
                        return callback(null, result);
                    }
                });
            }
        });

    },

    updateComment:function(id_comment,no_telp,id_barang,id_user,nama,komentar,callback){
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'UPDATE comment SET `nama` = ?, `komentar` = ? WHERE id_comment = ? AND id_barang = ?';
                conn.query(sql, [id_comment,id_barang,id_user,nama,komentar],function(err,result) {
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(err);
                        return callback(null, result);
                    }
                });
            }
        });

    },

    deleteComment:function(id_comment, callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected!");
                var sql = "DELETE FROM comment WHERE id_comment=?";
                conn.query(sql, [id_comment], function(err,result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    showComment:function(id_barang,callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected!");
                var sql = "SELECT nama,comment FROM comment WHERE id_barang = ?";
                conn.query(sql, [id_comment,id_barang], function(err,result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
    
};

module.exports = molenDB;