
const Model = require('./model')


function addMessage(message){
  const myMessage = new Model(message);
  myMessage.save();

}

const getMessage = async (filterUser) => {
  let filter = {};
  if(filterUser!=null){
    filter = {user: filterUser};
  }
  
  return await Model.find(filter);
}

async function updateText(id, message){
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id){
  return Model.deleteOne({
    _id: id,
  });
}


module.exports = { add: addMessage, list: getMessage,updateText: updateText, remove: removeMessage,};