const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BattleSchema = new Schema({
  battle_number: Number,
  name: String,
  region: String,
  location: String,
  battle_type: String,
  attacker_king: String,
  attacker_1: String,
  attacker_commander: String,
  attacker_outcome: String,
  defender_king: String,
  defender_1: String,
  defender_commander: String,
});

const BattleStore = mongoose.model("BattleStore", BattleSchema);

module.exports = BattleStore;