// getting-started.js
import mongoose from "mongoose";
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://vishadtyagi:KJ3GPuyMKOcpQsAn@cluster0.kmrqu5c.mongodb.net/calendar');
}