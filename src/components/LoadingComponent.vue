<template>
    <div class="loading" v-if="active">
    <!-- <div class="loadd" v-if="active"> -->
      <div class="loader"></div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.$nextTick(() => {
        // Ativa o loading antes que o componente seja montado
        this.$emit('update:active', true);
      });
    },
    // beforeRouteUpdate(to, from, next) {
    //   // Ativa o loading antes que a rota seja atualizada
    //   this.$emit('update:active', true);
    //   next();
    // }
  };
  </script>
  
  <style>

.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading-spinner {
    border: 4px solid #9b9b9b;
    border-top: 4px solid #000000;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
  }

  .loader {
    animation: rotate 1s infinite;
    height: 50px;
    width: 50px;
  }

  .loader:before,
  .loader:after {
    border-radius: 50%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  .loader:before {
    animation: ball1 1s infinite;
    background-color: #363636;
    box-shadow: 30px 0 0 #007bff;
    margin-bottom: 10px;
  }
  .loader:after {
    animation: ball2 1s infinite;
    background-color: #363636;
    box-shadow: 30px 0 0 #007bff;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg) scale(0.8) }
    50% { transform: rotate(360deg) scale(1.2) }
    100% { transform: rotate(720deg) scale(0.8) }
  }

  @keyframes ball1 {
    0% {
      box-shadow: 30px 0 0 #007bff;
    }
    50% {
      box-shadow: 0 0 0 #007bff;
      margin-bottom: 0;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #007bff;
      margin-bottom: 10px;
    }
  }

  @keyframes ball2 {
    0% {
      box-shadow: 30px 0 0 #007bff;
    }
    50% {
      box-shadow: 0 0 0 #007bff;
      margin-top: -20px;
      transform: translate(15px, 15px);
    }
    100% {
      box-shadow: 30px 0 0 #007bff;
      margin-top: 0;
    }
  }
      

  /* .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .loading-spinner {
    border: 4px solid #9b9b9b;
    border-top: 4px solid #000000;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .loader {
          transform: rotateZ(45deg);
          perspective: 1000px;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          color: #0069d9;
        }
          .loader:before,
          .loader:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: inherit;
            height: inherit;
            border-radius: 100%;
            transform: rotateX(70deg);
            animation: 1s spin linear infinite;
          }
          .loader:after {
            color: #0069d9;
            transform: rotateY(70deg);
            animation-delay: .4s;
          }
  
        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotateZ(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotateZ(360deg);
          }
        }
  
        @keyframes rotateccw {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
  
        @keyframes spin {
          0%,
          100% {
            box-shadow: .8em 0px 0 0px currentcolor;
          }
          12% {
            box-shadow: .8em .8em 0 0 currentcolor;
          }
          25% {
            box-shadow: 0 .8em 0 0px currentcolor;
          }
          37% {
            box-shadow: -.8em .8em 0 0 currentcolor;
          }
          50% {
            box-shadow: -.8em 0 0 0 currentcolor;
          }
          62% {
            box-shadow: -.8em -.8em 0 0 currentcolor;
          }
          75% {
            box-shadow: 0px -.8em 0 0 currentcolor;
          }
          87% {
            box-shadow: .8em -.8em 0 0 currentcolor;
          }
        } */
  
  </style>