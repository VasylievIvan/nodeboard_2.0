
const postSchema = ({
    message: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    timeStamp: { type: Date, default: Date.now },
});
