import { Rol } from "./rol";

export class Usuario {
    idUsuario: number;
    userName: string;
    password: string;
    estado: string;
    rols: Rol[];
}
