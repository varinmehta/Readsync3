const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema(
    {
        title: { type: String},
        author: { type: String},
        genre: { type: String},
        rating: { type: Number},
        imageSrc:{type: String,},
        review:[
            {
                type: String,
            }
        ],
        ISBN: { type: String },
        totalpages: {type: String},
        buylink: {type: String},
        description: { type: String},
        type: { type: Boolean,default: false},
}
)

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;