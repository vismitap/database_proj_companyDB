/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manager', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    SALARY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADDRESS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    GENDER: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: false
    },
    DEPARTMENT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'department',
        key: 'NUMBER'
      }
    },
    PROJECT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'project',
        key: 'NUMBER'
      }
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'manager'
  });
};
