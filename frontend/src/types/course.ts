export interface CourseProps{
    title:string;
    description:string;
    instructor:string;
}

export interface CourseData{
    title:string;
    description:string;
    //instructor:string;
    videos:CourseVideo[];
    publish:boolean;
    _id:string;

}

export interface CourseVideo{
    title:string;
    _id:string;
    url:string;
}