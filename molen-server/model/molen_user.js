var pool = require('./dbConfig.js');
var molenUserDB = {

    getDataUser: function (callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'SELECT email,nama,tgl_lahir,alamat,kota,provinsi,no_telp FROM user_acc';

                conn.query(sql, function (err, result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
                }
        });
    },

    getUserbyEmail: function (email,callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'SELECT id_user,email,nama,tgl_lahir,alamat,kota,provinsi,no_telp FROM user_acc WHERE `email` = ?';

                conn.query(sql,[email],function (err, result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
                }
        });
    },

    addUser: function(email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp,callback)
    {
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                var sql = 'INSERT INTO user_acc (`email`, `password`, `nama`,`tgl_lahir`,`alamat`,`kota`,`provinsi`,`no_telp`) VALUES(?,?,?,?,?,?,?,?)';
                conn.query(sql,[email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp], function(err,result) {
                    conn.release();
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

    updateUser:function(email,password,nama,id_user,tgl_lahir,alamat,kota,provinsi,no_telp,callback) {
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                var sql = 'UPDATE user_acc SET `email` = ?, `nama` = ?, `password`=?, `tgl_lahir` =? ,`alamat` = ?,`kota` = ? ,`provinsi` = ?,`no_telp` = ? WHERE id_user =?';
                conn.query(sql, [email,nama,id_user,password,tgl_lahir,alamat,kota,provinsi,no_telp], function(err,result) {
                    conn.release();
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

    loginUser:function(email,password,callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Login");
                var sql = 'SELECT email,password FROM user_acc WHERE `email` = ? AND `password` = ?';
                conn.query(sql, [email,password], function(err,result) {
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(result);
                        if(result.length > 0)
                        {
                            return callback(null,result);
                        }
                    }
                });
            }
        });
    }
}

module.exports = molenUserDB;