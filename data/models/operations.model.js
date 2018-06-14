const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
    name: String,
    id: Number,
    state: Boolean,
    type: String,
    people: [{
        id: Number,
        name: String,
        aka: String,
        picsLinks: [String],
        address: String,
        addressLink: String,
        addressPic: [String],
        vehicles: [{
            id: Number,
            brand: String,//marca
            model: String,
            type: String,
            plate: String,
            frame: String,
            pic: [String],
        }],
        companies: [{
            id: Number,
            name: String,
            cif: String,
            address: String,
            map: String,
        }],
        rutine: [String],
        links: [String],
        familiars: [{
            id: Number,
            name: String,
            familiarPics: [String],
            familiarAddress: String,
            addressLink: String,
            related: String,
        }],
    }],

})

const Operations = mongoose.model('operations', operationSchema);

module.exports = Operations; 