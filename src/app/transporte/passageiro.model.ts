export interface Passageiro {
  id?: string;
  nome: string;
  cpf: string;
  senha: string;
  cep: string;
  rua: string;
  contato: string;
  horario_embarque: string;
  id_motorista: string;
  ativo: boolean;
  dta_insert: string;
  tipo: string | { id: string; descricao: string };
  email: string;
}
