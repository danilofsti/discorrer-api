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
    } catch (err) {
        throw err;
    }
  }

  async getAllAthleteRuns(athlete: any) {
    try {
        const mongoose = await connect();
        const Run = mongoose.model("Run", RunSchema);
        const query = Run.find({ athlete });
        return await query.exec();
    } catch (err) {
        throw err;
    }
  }
}