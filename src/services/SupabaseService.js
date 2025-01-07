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
    console.log(item)
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
}

const supabaseService = new SupabaseService();
export default supabaseService;
