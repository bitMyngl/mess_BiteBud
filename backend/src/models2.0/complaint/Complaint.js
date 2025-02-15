import mongoose from "mongoose";
import {Student, User} from "../person/User.js";

const voteSchema = new mongoose.Schema({
    votedBy: {
        username: {type: String, required: true},
        userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Student'},
        isDeleted: {type: Boolean, default: false}
    }
}, {timestamps: {createdAt: true, updatedAt: true}})


const complaintSchema = mongoose.Schema({
    complaintId:{
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    complaintText: {
        type: String,
        required: true,
    },
    complaintHeading: {
        type: String,
        required: true,
    },
    complaintImages: {
        type:[{
            type: String,
            default: ""
        }],
        default: []
    },
    complaintAudio: {
        type: String,
        default: ""
    },
    complaintBy: {
        firstName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        },
        username: {
            type: String, required: true
        },
        profilePicture:{
            type: String, required: true
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },
        regNo:{
            type: String,
            required: true,
        },
        hostel:{
            type: String,
            required: true,
        }
    },
    complaintTime:{
        type: Date,
        default: Date.now
    },
    resolvedInfo:{
            status: {type: Boolean, default: false},
            message: {type: String, default: ""},
            resolveTime: {type: Date, default: Date.now},
            resolvedBy: {
                    name: {type: String},
                    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            }
    },
    isDeleted: { type: Boolean, default: false },
    upVotes: {
        type: [voteSchema],
        default: []
    },
    downVotes: {
        type: [voteSchema],
        default: []
    },
    upVoteCount:{
        type: Number,
        default: 0
    },
    downVoteCount:{
        type: Number,
        default: 0
    }

}, {timestamps: {createdAt: true, updatedAt: true}})

const Complaint = new mongoose.model('Complaint', complaintSchema);

export default Complaint;