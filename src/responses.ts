import { Payload, Lesson, JWT, Teacher } from "./common"

export type TokenResponse = {
    access_token: JWT,
    refresh_token: JWT,
}

export type Login = Payload<TokenResponse>

export type Register = Login

export type Refresh = Login

export type GetLesson = Payload<Lesson>

export type NewLesson = GetLesson

export type GetLessonList = Payload<Lesson[]>

export type GetTeacher =  Payload<Teacher>

export type GetTeacherList = Payload<Teacher[]>