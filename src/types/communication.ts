// src/types/communication.ts

export interface SeñaMedica {
    id: string;
    termino: string;
    categoria: 'SINTOMA' | 'DIAGNOSTICO' | 'ACCION';
    videoUrl: string;
}

// 1. Agregá esta línea que es la que pide el DoctorPanel
export type QuickReply = 'SI' | 'NO' | 'ESPERE';

// 2. Esta la podés dejar para cuando el paciente responda
export type RespuestaPaciente = 'SI' | 'NO' | 'DUDAS';