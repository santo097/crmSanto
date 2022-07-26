const {Relacion, sequelize} = require('./Database');

Relacion.pais.hasOne(Tablas.pais,{
    foreignKey:"paisID",
    otherKey:"paisID"
});

sequelize.sync();

module.exports = Relacion;