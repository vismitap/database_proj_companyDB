/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    GENDER: {
      type: DataTypes.ENUM('Male','Female'),
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
    SALARY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PROJECT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'project',
        key: 'NUMBER'
      }
    }
  }, {
    tableName: 'employee'
  });
};
