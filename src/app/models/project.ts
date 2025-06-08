import { Client } from "./client";
import { Task } from "./task";

export interface Project {
  id: number;
  nombre: string;
  descripcion: string;
  client: Client;
  tasks: Task[];
}