export declare class TechnologiesSurveyDto {
    languages: string[];
    frontend: string[];
    backend: string[];
    devops: string[];
    databases: string[];
    uxui: string[];
}
export declare class AboutYouSurveyDto {
    position: string;
    yearsOfExperience: string;
    description: string;
}
export declare class PersonalLinksSurveyDto {
    githubUrl: string;
    linkedinUrl: string;
    repositoryUrl: string;
}
export declare class FillSurveyDto {
    technologiesSurvey: TechnologiesSurveyDto;
    aboutYouSurvey: AboutYouSurveyDto;
    personalLinksSurvey: PersonalLinksSurveyDto;
}
