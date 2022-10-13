const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgFlag: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.REAL,
    },
    population: {
      type: DataTypes.INTEGER,
    }
  });
};
