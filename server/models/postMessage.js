import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  creator: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  draftYear: Number,
  draftRound: Number,
  draftPicks: {
      pick1: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick2: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick3: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick4: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick5: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick6: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick7: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick8: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick9: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick10: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick11: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick12: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick13: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick14: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick15: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick16: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick17: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick18: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick19: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick20: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick21: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick22: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick23: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick24: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick25: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick26: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick27: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick28: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick29: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick30: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick31: {
        pickA: String,
        pickB: String,
        pickC: String
      },
      pick32: {
        pickA: String,
        pickB: String,
        pickC: String
      },
    },
  correctPicks: {
    type: Number,
    Default: 0
  },
  pointTotal: {
    type: Number,
    Default: 0
  }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;