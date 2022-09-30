import mongoose from "mongoose";

async function connect() {
  const uri = "mongodb+srv://root:gMSB93oPaHiEU0ue@store-api.ouf7ida.mongodb.net/discorrer?retryWrites=true&w=majority";
  return await mongoose.connect(uri);
}

export { connect }