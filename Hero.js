class Hero extends GameObject{
    constructor(container, src, x, y, width,height, velX, velY){
        super(container, src, x, y, width,height, velX, velY);
    }
    move() {
        this.velY += g;
        //만약 velY가 30을 넘어서면 30으로 고정
        if(this.velY >= 30){
            this.velY =30;
        }
        // 플레이어의 이동 동작 구현
        this.x += this.velX;
        this.y += this.velY;

        //주인공의 y축 위치가 550px 이상되면 주인공의 y축값을 550고정
        if(this.y >=450){
            this.y = 450;
        }

        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";
    }
    changeImage(newSrc){
        this.div.style.backgroundImage = "url(" +newSrc + ")";
    }
}