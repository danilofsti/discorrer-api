import RunSchema from "../schema/run";
import { connect } from "../../infra/db/mongo.db";
import { RunRepository } from "../usecases/run";

export class RunRepositoryAdapter implements RunRepository {
  async createRun(runInfo: any) {
    try {
      const mongoose = await connect();
      const Run = mongoose.model("Run", RunSchema);
      runInfo = new Run(runInfo);
      await runInfo.save();
      return runInfo;
    } catch (err) {
      throw err;
    }
  }

  async updateRun(runInfo: any) {
    try {
        const mongoose = await connect();
        const Run = mongoose.model("Run", RunSchema);
        await Run.findByIdAndUpdate(runInfo._id, runInfo);
        const query = Run.findById(runInfo._id);
        return await query.exec();
    } catch (err) {
        throw err;
    }
  }

  async getAllRuns() {
    try {
        const mongoose = await connect();
        const Run = mongoose.model("Run", RunSchema);
        const query = Run.find().sort({start_date_local: 'desc'});
        return await query.exec();
    } catch (err) {
        throw err;
    }
  }

  async getAllRunsByJornal(jornal: string) {
    try {
        const mongoose = await connect();
        const Run = mongoose.model("Run", RunSchema);
        const query = Run.find({'jornal': { $regex : new RegExp(jornal, "i") }}).sort({start_date_local: 'desc'});
        return await query.exec();
    } catch (err) {
        throw err;
    }
  }

  async getRun(id: any) {
    try {
        const mongoose = await connect();
        const Run = mongoose.model("Run", RunSchema);
        const query = Run.findById(id);
        return await query.exec();
    } catch (err) {
        throw err;
    }
  }
}