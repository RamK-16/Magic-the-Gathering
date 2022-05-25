const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card, State, User }) {
      // define association here
      this.belongsTo(Card, { foreignKey: 'card_id' });
      this.belongsTo(State, { foreignKey: 'state_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsToMany(User, { through: 'Carts', foreignKey: 'post_id', as: 'UserInCart' });
    }
  }
  Post.init({
    card_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    state_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
