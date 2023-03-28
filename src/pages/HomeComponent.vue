<template>
    <main>
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
                        <v-select class="custom-select" v-model="selectedOption" :options="options" placeholder="Selecione a Unidade"></v-select>
                    </div>
                    <br>
                    <div class="form-group">
                        <label class="text-field">Para:</label>
                        <v-select class="custom-select" v-model="selectedOption" :options="options" placeholder="Selecione a Unidade"></v-select>
                    </div>
                    <br>
                    <button class="btn-primary-default">Converter agora!</button>
                </div>
            
            </div>
        </div>
    </main>
</template>

<script>

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

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
      inputValue: ''
    }
  }
}


</script>

<style scoped>

.btn-primary-default {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}

.btn-primary-default:hover {
  background-color: #0069d9;
}

@media (min-width: 500px) {
  .card {
    width: 40%;
  }
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}

@media (min-width: 992px) {
  .card {
    flex-direction: column;
  }
}

/* .card {
  background-color: #e0e0e0;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  margin: 20px;
}

.card-header {
  background-color: #3b3b3b;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-title {
  margin: 0;
}

.card-body {
  padding: 10%;
  color: #555;
}

.input-text-default {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.custom-select {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.custom-select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

main{
    background-color: var(--color-background-home);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text-top{
    color: var(--color-text-light);
    font-size:22px;
    margin-bottom: 20px;
} */

/* #subscribe{
    width: 340px;
} */
/* .text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
} */

/* @media (min-width: 700px){
    #subscribe{
        width: 370px;
    }
} */

</style>