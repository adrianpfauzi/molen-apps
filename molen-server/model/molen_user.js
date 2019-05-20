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

            //str_to_date(LoginDate,'%d.%m.%Y') as DateFormat
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

    addUser: function(email, password, nama,tgl_lahir,alamat,kota,provinsi,no_telp,callback) // Menambah user
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

    updateUser:function(id_user,nama,tgl_lahir,alamat,kota,provinsi,no_telp,callback) { //merubah data user
        pool.getConnection(function(err,conn){
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                var sql = 'UPDATE user_acc SET `nama` = ?, `tgl_lahir` =? ,`alamat` = ?,`kota` = ? ,`provinsi` = ?,`no_telp` = ? WHERE id_user =?';
                conn.query(sql, [nama,tgl_lahir,alamat,kota,provinsi,no_telp,id_user], function(err,result) {
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

    loginUser:function(email,password,callback) { //melakukan autentikasi
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Login Success");
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