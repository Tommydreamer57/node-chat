var messages = []

var id = 0;

module.exports = {
    create: (req,res,next) => {
        let message = req.body;
        message.id = id;
        messages.push(message);
        id++;
        res.send(messages);
    },
    read: (req,res,next) => {
        res.send(messages)
    },
    update: (req,res,next) => {
        let message = req.body;
        let messageId = req.body.id;
        messages[messageId] = message;
        res.send(messages);
    },
    delete: (req,res,next) => {
        let messageId = req.body.id;
        messages.splice(messageId, 1);
        res.send(messages);
    }
}