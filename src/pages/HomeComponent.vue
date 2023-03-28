<template>
    <main>
        <loading-personalizado :active="isLoading"></loading-personalizado>
        <div class="card">
            <div class="card-header">
                <div class="card-title">Converter Unidade de Medida</div>
            </div>
            <div class="card-body">
                <!-- <div class="text-top">Videos novos toda quinta as 20 horas</div>
                
                <a href="http://www.google.com" target="_blank">
                    <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
                </a>
            
                <div class="text-bottom">youtube.com/...</div> -->
            
                <div>
                    <div>
                        <label class="text-field">Valor:</label>
                      <input v-model="inputValue" class="input-text-default" placeholder="Digite o valor">
                    </div>
                    <br>
                    <div class="form-group">
                        <label class="text-field">De:</label>
                        <v-select class="custom-select" :options="options" placeholder="Selecione a Unidade"></v-select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label class="text-field">Para:</label>
                        <v-select class="custom-select" :options="options" placeholder="Selecione a Unidade"></v-select>
                    </div>
                    <br>
                    <button class="btn-primary-default" @click="resultado">Converter agora!</button>
                </div>
            
            </div>
        </div>
    </main>
</template>

<script>

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
// import _ from 'lodash';

export default{
    name: 'HomeComponent',
    components: {
    'v-select': vSelect
  },
  data() {
    return {
    //   selectedOption: 'opcao1',
      options: [
        { label: 'Opção 1', value: 'opcao1' },
        { label: 'Opção 2', value: 'opcao2' },
        { label: 'Opção 3', value: 'opcao3' },
        { label: 'Opção 4', value: 'opcao4' },
        { label: 'Opção 5', value: 'opcao5' },
      ],
      inputValue: '',
      numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      isLoading: false
    }
  },
  methods:{
    resultado() {
        this.isLoading = true
        // for (let index = 2; index < 1; index++) {
        //     const element = array[index];
            
        // }

      return 'true';
  },
  computed: {
    
    },
  },
}

</script>
