const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Role, City, Post,
    }) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.belongsTo(City, { foreignKey: 'city_id' });
      this.hasMany(Post, { foreignKey: 'user_id' });
      this.belongsToMany(Post, { through: 'Carts', foreignKey: 'user_id', as: 'PostInCart' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
