import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env';

class SupabaseService {
  constructor() {
    this.client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  async getItems() {
    try {
      const { data, error } = await this.client
        .from('itemestoque')
        .select('*')
        .gt('quantidade', 0)
        .order('id', { ascending: true });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro ao buscar itens do estoque:', error.message);
      throw new Error('Não foi possível carregar os itens do estoque.');
    }
  }

  async addItem(item) {
    const dataValidade = item.DataValidade
      ? new Date(item.DataValidade).toISOString()
      : null;

    if (dataValidade && isNaN(new Date(dataValidade).getTime())) {
      throw new Error('Data de validade inválida.');
    }

    const { data, error } = await this.client
      .from('itemestoque')
      .insert([item]);

    if (error) throw new Error(error.message);
    return data;
  }

  async updateItemQuantity(id, newQuantity) {
    try {
      const { data, error } = await this.client
        .from('itemestoque') // Certifique-se de que o nome da tabela está correto
        .update({ quantidade: newQuantity })
        .eq('id', id);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error('Erro ao atualizar quantidade do item:', error.message);
      throw new Error('Não foi possível atualizar a quantidade do item.');
    }
  }

  async createConsumedProductRecord(consumedItem) {
    const dataValidade = consumedItem.DataValidade
      ? new Date(consumedItem.DataValidade).toISOString()
      : null;

    if (dataValidade && isNaN(new Date(dataValidade).getTime())) {
      throw new Error('Data de validade inválida.');
    }
    const { data, error } = await this.client
      .from('produtoconsumido')
      .insert([consumedItem]);

    if (error) throw new Error(error.message);
    return data;
  }
  async getConsumedItems() {
    try {
      const { data, error } = await this.client
        .from('produtoconsumido')
        .select('*');

      if (error) throw new Error(error.message);
      return data;
    } catch (error) {
      console.error('Erro ao buscar itens consumidos:', error.message);
      throw error;
    }
  }

  async fetchConsumedItens() {
    try {
      const { data, error } = await this.client
        .from('produtoconsumido')
        .select('*')
        .gt('quantidadeconsumida', 0)
        .order('id', { ascending: true });

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Erro ao buscar itens do estoque:', error.message);
      throw new Error('Não foi possível carregar os itens do estoque.');
    }
  }

}


const supabaseService = new SupabaseService();
export default supabaseService;
