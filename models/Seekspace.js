const mongoose = require('mongoose')

const SeekspaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500,'Description can not be more than 500 characters']
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    phone: {
        type: String,
        maxlength: [10, 'Contact number cannot be more than 10 characters']
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email for contact'
        ]
    },
    address: {
        type: String,
        required: [true,'Please add the address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
            //required: true
        },
        coordinates: {
            type: [Number],
            //required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String         
    },
    features: {
        type: [String],
        required: true,
        enum: ['Close to market',
                'Medical services in close proximity',
                'fully air conditioned'
    ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be atleast 1'],
        max: [10, 'Rating cannot be more than 10']
    },
    averageRent: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    fullyfurnished: {
        type: Boolean,
        default: false
    },
    pg: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Seekspace',SeekspaceSchema)