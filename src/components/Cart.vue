<template>
  <div class="cart">
    <h2 class="cart__title">КОРЗИНА</h2>
    <div class="row table-head">
			<div class="col-chek">Выделено <b>{{chek}}</b></div>
			<div class="del-chek">
				<span @click="delCheck"><button><i class="icon-cancel"></i></button><u>Удалить отмеченные</u></span>
			</div>
		</div>

		<div class="table-body">
		<cart
			v-for="product in products"
			:key="product.id"
			:product_data="product"
			/>
			<div class="chek">
				<input type="checkbox" name="chek" v-model="item.checkedProd">{{item.id}}
			</div>			
			<div class="prewiew">
				<img :src="item.img" alt="placeholder+image">
			</div>
			<div class="title">{{item.title}}</div>
			<div class="col-1 text-gray">{{item.price}} Р</div>
			<div class="col-05 text-gray">x</div>
			<div class="col-1 text-gray">
				<input class="text-gray" type="text" name="qt" :value="item.qt" @click="showWindow(item.price, item.qt, item.id)" readonly>
			</div>			
			<div class="col-05">=</div>
			<div class="col-1">{{item.price*item.qt}} Р</div>			
		</div>

		<div class="row">
			<div class="pop-up" v-show="isShow">
				<p>Изменить количество</p>
				<div>{{tempPr}} x 
					<button type="button" @click="delQT()">-</button>
					<input type="text" name="qt" v-model="tempQT" readonly>
					<button type="button" @click="addQT()">+</button> 
					{{tempPr*tempQT}} Р
				</div>
				<p><u @click="saveNewQt()">СОХРАНИТЬ</u>
					<span @click="isShow = !isShow"><u>ОТМЕНИТЬ</u></span>
				</p>
			</div>
		</div>
		</div>	

		<div class="row">
			<div class="calc text-gray">
				<p>Промежуточный итог в корзине: </p>
				<p>В том числе НДС: </p>
			</div>
			<div class="rez">
				<p>{{promo}} Р</p>
				<p>{{nds}} Р</p>
			</div>
		</div>

		<div class="row">
			<div class="calc total">ИТОГО:</div>				
			<div class="total rez">{{total}} Р</div>
		</div>

	</div>
</template>

<script>
import inCart from '../../product.json';
export default {
	
	data(){
		return {			
			inCart,
			isShow: false,
			tempQT: 0,
			tempPr: 0,
			tempId: 0
		}
	},
	computed: {
		promo() {
		  let promo = 0; 
		  for(let i = 0; i < this.inCart.length; i++) {
		    promo += this.inCart[i].price * this.inCart[i].qt;
		  }		      
		      return promo;
		},
		nds() {		      
		  return this.promo * 0.18;
		},
		total() {		      
		  return this.promo + this.nds;
		},
		chek(){
		  let ckeck = 0;
		  for(let i = 0; i < this.inCart.length; i++) {
			if(this.inCart[i].checkedProd){
			  ckeck++;
		}
	}
	return ckeck;
		}
	},
	methods: {
		delCheck(){
				for(let i = 0; i < this.inCart.length; i++) {
					if(this.inCart[i].checkedProd){
						this.inCart.splice(i, this.chek);
					}
				}				
		},
		showWindow(price, qt, id){				
					this.isShow = !this.isShow;	
					this.tempPr = price;
					this.tempQT = qt;
					this.tempId	= id;			
		},
		delQT(){
				if(this.tempQT > 1){
					this.tempQT--;
				} else {
					alert("Товаров не может быть меньше 1!");
				}				
		},
		addQT(){
			if(this.tempQT > 1000){
				alert("Товаров не может быть больше 1000!");
			} else {
				this.tempQT++;
			}
		},		
		saveNewQt(){
		    	for(let i = 0; i < this.inCart.length; i++) {
					if(this.inCart[i].id === this.tempId){
						this.inCart[i].qt = this.tempQT;
						this.isShow = !this.isShow;	
					}				
				}			    
		}
	}
}	
</script>

<style lang="scss">
	.cart{
  width: 100%;
  h1{
    color: #0a7eb5;   
  }
  .table-head{
  background: #d9e8ef;
  width: 100%;
  padding: 1rem;  
  }
  .table-body{
    padding-bottom: 1rem;
    border-bottom: 1px solid #d5d5d5;
    font-family: arial;
    .text-gray{
      color: #626262;
    }
  }
  .col-chek{
    width: calc(100% / 3);
  }
  .del-chek{
    width: calc(100% / 3 * 2);
    display: flex;
    justify-content: flex-end;    
  }
  .del-chek button{
    background: #7f7f7f;
    padding: .1rem;
    border: 0;
    color: #d9e8ef;
    border-radius: 4px;
    margin-right: .2rem;
  }
  .chek{
    width: calc(100% / 12);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 650px){
      width: calc(100% / 8);
    }
  }
  .prewiew{
    display: flex;
    width: calc(100% / 12);
    border-right: 1px dotted black;
    border-left: 1px dotted black;
    justify-content: center;
    align-items: flex-start;
    img{
      width: 80%;
    }
    @media (max-width: 650px){
      width: calc(100% / 8);
    }
  }
  .title{
     width: calc(100% / 12 * 6);
     padding: 0 1rem;
     border-right: 1px dotted black;
     display: flex;     
      align-items: center;
     @media (max-width: 650px){
      width: calc(100% / 4 * 3);
    }
  }
  .col-05{
    width: calc(100% / 24 * 1);
    justify-content: center;
    display: flex;
    align-items: center;
    @media (max-width: 650px){
      width: calc(100% / 8);
      margin: .8rem 0 1.2rem 0;
    }    
  }
  .col-1{
    width: calc(100% / 12 * 1);
    justify-content: center;
    display: flex;
    align-items: center;
    input[type="text"]{
      width: 50%;
      text-align: center;
      border: 1px solid #d5d5d5;
      border-radius: 4px;
      box-shadow: 0 0 5px #efefef inset;
    }
     @media (max-width: 650px){
      width: calc(100% / 4);
      margin: .8rem 0 1.2rem 0;
    }      
  }
  .pop-up{
    padding: 1rem 1.2rem;
    box-shadow: 0 0 10px #efefef; 
    z-index: 100;
    position: absolute;
    background: white;
    right: 2rem;
    bottom: 20%;
    p{
    color: #006599;
    font-weight: bold;
    u{
      font-size: 0.8rem;
    }
    span{
      color: #333333;
    }
  }
  button{
    background: #559abc;
    border: 0;
    padding: .2rem .5rem;  
    margin: 0 .2rem;  
  }
  input[type="text"]{
      width: 3rem;
      text-align: center;
      border: 1px solid #d5d5d5;
      border-radius: 4px;
      box-shadow: 0 0 5px #efefef inset;
    }
 }
  .calc{
    width: calc(100% / 12 * 10);
    text-align: right; 
    justify-content: flex-end;
    font-family: arial;
    @media (max-width: 650px){
      width: calc(100% / 3 * 2);
      margin: .8rem 0 1.2rem 0;
    }   
  }
  .rez{
    width: calc(100% / 12 * 2);
    text-align: right;
    font-weight: bold;   
    font-size: 1.1rem; 
    @media (max-width: 650px){
      width: calc(100% / 3);
      margin: .8rem 0 1.2rem 0;
    }   
  }
  .total{   
    border-top: 1px dotted black;    
    color: #0a7eb5;
    padding-top: 0.3rem;
  }
}
</style>