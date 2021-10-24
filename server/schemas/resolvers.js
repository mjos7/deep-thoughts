const { User, Thought } = require('../models');

const resolvers = {
  Query: {
    // get thoughts
    thoughts: async (parent, { username }) => {
      thought: async (parent, { _id }) => {
        return Thought.findOne({ _id });
      };
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },
  },
};

module.exports = resolvers;
