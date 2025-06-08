import { Status } from "./status";
import { TaskType } from "./task-type";
import { TimeRecord } from "./time-record";
import { User } from "./user";

export interface Task {
    id: number;
    name: string;
    status: Status;
    taskType: TaskType;
    scheduledTotalTime: number;
    realTotalTime: number;
    timeRecords: TimeRecord[];
    assignedUsers: User[];
}
