export default{
    totalMoney(state){
        let money = 0;
        for (let i = 0; i < state.items.length; i++) {
            money+=parseInt(state.items[i].price)*state.items[i].count;
        }
        return money;
    }
}