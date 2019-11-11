module.exports = {
    sum(num1, num2){
        return +num1 + +num2
    },

    bankAccount : {
        balance: 1000,
        deposit(amount){
            this.balance += amount
        }, 
        withdraw(amount){
            this.balance -= amount
        }
    }
}