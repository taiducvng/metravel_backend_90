const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
      title: {type: String, required : true},
      price: {type: String, required: true},
      imageUrl:  {type: String, required: true},
    }, {timestamps: true}
);

module.exports = mongoose.model("Job",JobSchema);
