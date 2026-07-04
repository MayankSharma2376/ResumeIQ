import Resume from "../models/resume.model";
import resumeAnalysisModel from "../models/resumeAnalysis.model";

export const getLatestResumeService = async (userId: string) => {
  return await Resume.findOne({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};



export const getResumeHistoryService = async(userId: string)=> {
  const resumes = await Resume.find({
    user: userId
  })
  .sort({createdAt: -1})
  .lean()

  const history = await Promise.all(
    resumes.map(async (resume)=>{
      const analysis = await resumeAnalysisModel.findOne({
        resume: resume._id
      }).lean()

      return {
        ...resume,
        analysis
      }
    })
  )
  
  return history

}



