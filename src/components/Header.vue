<template>
  <div class="cart">
    <div class="row">
      <div class="logo">
        <embed src="../assets/img/Samsung_Electronics_logo.png" id="logo">
      </div>
      <div class="searchForm">
        <span class="icon-search"></span>
        <input type="search"/>
        <input type="button" value="ПОИСК"/>
      </div>
    </div>

    <div class="row">
      <nav>
        <span class="toggle" @click="menuHidd = !menuHidd">☰</span>
        <ul class="menu" v-show="menuHidd">
          v-for="menuItem in menuList"
            <a href="#">
            {{ menuItem.name }}
            <i class="icon-down-open-big"></i>
           </a></li>
       </ul>
      </nav>
    </div>

    <div class="row">
      <span><u>Главная</u> / Корзина</span>
    </div>

    <div class="row">
      <cart></cart>
    </div>

  </div>
</template>

<script>
import cart from './Cart';

export default {
  name: 'app',
  data () {
    return {
      menuHidd: true,
      menuList: [
        {
          name: 'каталог продукции'
        },
        {
          name: 'все бренды'
        },
        {
          name: 'подарки на 14 февраля'
        },
        {
          name: 'подарки на 23 февраля'
        },
        {
          name: 'подарки на 8 марта'
        }
      ]
    }
  },
   components:{
      cart
    }
}
</script>
<style lang="scss">
  input[type="search"]{
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  box-shadow: 0 0 5px #efefef inset; 
  padding: 0.4rem;
  margin-right: 0.5rem;  
  padding-left: 1.7rem;
}
.icon-search{
  color: #d5d5d5;
  margin-right: -1.7rem;
  z-index: 10;
}
input[type="button"]{
  padding: 0.4rem;
  background-color: #17709a; 
  border-radius: 4px;
  color: white;
  border: 0;
}
input[type="button"], input[type="search"] {
    line-height:normal !important;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.logo{    
  width: calc(100% / 3);
  @media (max-width: 500px){
    width: calc(100% / 1);
  }
}
.searchForm{
  width: calc(100% / 3 * 2);
  display: flex;    
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 300px){
    width: calc(100% / 1);
    justify-content: flex-start;
    margin-top: 1rem;
  }
  @media (max-width: 500px){
    width: calc(100% / 1);
    justify-content: flex-end;
    margin-top: 1rem;
    input[type="button"]{
      width: 20%;
      } 
    input[type="search"] {
      width: 80%;
    }
  }
}
nav{
  margin: 1.5rem auto;
  max-width: 100%;
  width: 100%;  
}
.toggle {
  display: none;
  @media (max-width: 500px){
  display: block;  
  cursor: pointer;   
  }  
}
.menu{
  padding: 0;
  margin: 0;
  max-width: 100%; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style-type: none; 
  width: 100%;
  @media (max-width: 500px){
    display: block;
    width: 100%;
  }   
}
.menu li{
  background: linear-gradient(to right, #92c8e1, #b2daed);
  padding: 1rem 0;
  text-transform: uppercase;
  text-decoration: none;
  transition: background .2s linear;  
  text-align: center;
  width: calc(100% / 5);
  border-radius: 4px 4px 0 0;
  @media (max-width: 500px){
    display: block;
    width: 100%;
    border-radius: 0;
  }
  @media (max-width: 1230px){
   height: 4rem;
  } 
  @media (max-width: 700px){
   height: 5rem;
  } 
}
.menu li a{
color: #4b4b4b;
align-self: center;
@media (max-width: 500px){
    display: block;
    width: 100%;
  }
}
</style>