export interface IExperiencia {
    empresa: string
    imagem: string;
    cargo: string;
    dataInicio: Date;
    dataFim?: Date;
    atividades: Array<string>;
    tecnologias: Array<string>;
    clientes?: Array<string>;
}
