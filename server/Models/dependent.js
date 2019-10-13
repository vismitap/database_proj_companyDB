/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dependent', {
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    GENDER: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: false
    },
    BIRTH_DATE: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    RELATION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EMPLOYEE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'employee',
        key: 'ID'
      }
    }
  }, {
    tableName: 'dependent'
  });
};
