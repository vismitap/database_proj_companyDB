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
    }
  }, {
    tableName: 'manager'
  });
};
