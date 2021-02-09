class Goods2 extends Goods {
    constructor(name, amount, image, count, out, sale) {
        super(name, amount, image, count, out )
        this.sale = sale;
    }
    drawSale() {
        super.draw();
        if (this.sale == 'true') {
            document.querySelector(this.out).innerHTML += `<br>sale`
        }
    }
}