module.exports = function (sequelize, DataTypes) {
  return sequelize.define('project', {
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NUMBER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    LOCATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SS_NO: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'company',
        key: 'SS_NO'
      }
    },
    DEPARTMENT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'department',
        key: 'NUMBER'
      }
    }
  }, {
    tableName: 'project'
  });
};