<template>
    <footer>

        <a class="socialLink" target="_blank" href="https://www.linkedin.com/in/marcelo-rodrigues-9a6016117/">
            <img alt="Linkedin" title="Linkedin" src="../assets/linkedin_logo.png">
            <!-- <img alt="Linkedin" title="Linkedin" src="..\src\assets\linkedin_logo.png"> -->
        </a>

        <a class="socialLink" target="_blank" href="https://github.com/marcelomgr">
            <img alt="GitHub" title="Github" src="../assets/github_logo.png" style="width: 36px;">
            <!-- <img alt="Linkedin" title="Linkedin" src="..\src\assets\linkedin_logo.png"> -->
        </a>

        <!-- <a class="socialLink" v-for="(socialLink,index) in socialLinks" :key="index" :href="socialLink.link" target="_blank">
            <img :alt="socialLink.label" :title="socialLink.label" :src="socialLink.icon">
        </a> -->
    </footer>
</template>

<script>
import api from '@/services/api.js'

export default{
    name: 'FooterComponent',
    data(){
        return{
            socialLinks: []
        }
    },
    mounted(){
        api.get('/GetAllUnidadesMedidaDistancia').then(response => {
            this.socialLinks = response.data;
        })
    }
}
</script>

<style scoped>

footer{
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
}

.socialLink{
    border: 2px solid var(--color-text-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    width: 40px;
    height: 40px;
    margin: 0 10px;

}

.socialLink img{
    width: 20px;
}

</style>