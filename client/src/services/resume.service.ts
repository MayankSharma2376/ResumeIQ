import api from "../api/axios";

export const getLatestResume = () => {
    return api.get("/resume/latest");
};

export const getResumeHistory = () => {
    return api.get("/resume/history");
};

export const getUserResumes = () => {
    return api.get("/resume");
};

export const getResumeAnalysis = (id: string) => {
    return api.get(`/resume/${id}`);
};

export const deleteResume = (id: string) => {
    return api.delete(`/resume/${id}`);
};

export const uploadResume = async (file: File) => {

    const formData = new FormData();

    formData.append("resume", file);

    return api.post("/resume/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

};