var pool = require('./dbConfig.js');
var molenLapakDB = { 

    // Function untuk Lapak Process
    
    getListLapak: function(callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                console.log("Connected");
                var sql = 'SELECT * FROM lapak_detail';
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

    getDataLapak: function(idlapak, callback) {
        pool.getConnection(function(err,conn) {
            if(err) {
                console.log(err);
                return callback(err,null);
            }

            else {
                var sql = 'SELECT * FROM lapak_detail where id_lapak = ?';
                conn.query(sql,[idlapak],function(err,result){
                    conn.release();
                    if(err) {
                        console.log(err);
                        return callback(err,null);
                    }

                    else {
                        console.log(result);
                        return callback(null,result);
                    }
                });
            }
        });
    }


}

module.exports = molenLapakDB;