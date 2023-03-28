<template>
    
    <main>
        <div class="text-top">Videos novos toda quinta as 20 horas</div>

        <a href="http://www.google.com" target="_blank">
            <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>

        <div class="text-bottom">youtube.com/...</div>

        <div>
            <div class="form-group">
                <label class="font-weight-bold">De:</label>
                <v-select class="selectDefault" v-model="selectedOption" :options="options" placeholder="Selecione um Grupo"></v-select>
            </div>
            <div class="form-group">
                <label class="font-weight-bold">Para:</label>
                <v-select class="selectDefault" v-model="selectedOption" :options="options" placeholder="Selecione um Grupo"></v-select>
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
      selectedOption: 'opcao1',
      options: [
        { label: 'Opção 1', value: 'opcao1' },
        { label: 'Opção 2', value: 'opcao2' },
        { label: 'Opção 3', value: 'opcao3' },
        { label: 'Opção 4', value: 'opcao4' },
        { label: 'Opção 5', value: 'opcao5' },
      ]
    }
  }
}


</script>

<style scoped>

.my-select {
  min-width: 500px;
}

.selectDefault{
    width: 200px !important;
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
}

#subscribe{
    width: 340px;
}
.text-bottom{
    color: var(--color-text-light);
    font-size: 18px;
    margin-top: 20px;
}

@media (min-width: 700px){
    #subscribe{
        width: 370px;
    }
}

</style>