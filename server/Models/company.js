/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LOCATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SS_NO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'company'
  });
};
