export type NamedEntity = {
    first_name: string
    last_name?: string
}

export type Payload<T> = { payload: T }

/**
 * @format uuid
 */
export type UUID = string

/**
 * @format uuid
 */
export type TeacherID = UUID
/**
 * @format uuid
 */
export type LessonID = UUID
/**
 * @format uuid
 */
export type TaskID = UUID
/**
 * @format uuid
 */
export type UserID = UUID

/**
 * @format uuid
 */
export type EntityID = TeacherID | LessonID | TaskID
export type EntityType = "teacher" | "lesson" | "task"
export type IDOf<Entity extends EntityType> = Entity extends "teacher"
    ? TeacherID
    : Entity extends "lesson"
    ? LessonID
    : TaskID

/**
 * @format jwt
 * @pattern [a-zA-Z0-9_=]{18,24}\.[a-zA-Z0-9_=]{48,64}\.[a-zA-Z0-9_=]{36,48}
 */
export type JWT = string

export type Monday = 1
export type Tuesday = 2
export type Wednesday = 3
export type Thursday = 4
export type Friday = 5
export type Saturday = 6
export type Sunday = 7
export type WeekDay =
    | Monday
    | Tuesday
    | Wednesday
    | Thursday
    | Friday
    | Saturday
    | Sunday

/**
 * @type integer
 * @minimum 0
 * @maximum 24
 */
export type Hour = number
/**
 * @type integer
 * @minimum 0
 * @maximum 60
 */
export type Minute = number

export type Time = {
    hour: Hour
    minute: Minute
}

export type Weekly = 1
export type BiWeekly = 2
export type RepetitionFrequency = Weekly | BiWeekly

export type Repeat = {
    /**
     * @description Frequency at which lessons are to be repeated. 1 means every week, 2 means biweekly
     */
    every: RepetitionFrequency
    day: WeekDay
    time: Time
}

export interface Lesson {
    /**
     * @format uuid
     */
    id: LessonID
    title: string
    repeats: Repeat[]
    /**
     * @description Array of Teacher IDs
     * @abstract if you have read access to the lesson, you get read access to the teachers assigned to it
     * @items.format uuid
     * @items.type string
     */
    teachers: TeacherID[]
    description?: string
}

export interface Teacher extends NamedEntity {
    /**
     * @format uuid
     */
    id: TeacherID
    /**
     * @format uuid
     */
    userID?: UserID
    // lessons: LessonID[] // not MVP
}

export interface Task {
    /**
     * @format uuid
     */
    id: TaskID
    name: string
    description?: string
    /**
     * @format uuid
     */
    lesson?: LessonID
    // teacher?: TeacherID // not MVP
}

export interface User extends NamedEntity {
    /**
     * @format uuid
     */
    id: UserID
}
