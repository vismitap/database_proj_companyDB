module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LOCATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NUMBER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    COMPANY: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'company',
        key: 'SS_NO'
      }
    }
  }, {
    tableName: 'department'
  });
};
