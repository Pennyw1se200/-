class GameObject{
    constructor(container, src, x, y, width,height, velX, velY){
        this.container= container;
        this.div = document.createElement("div");
        this.src = src;
        this.x =x;
        this.y =y;
        this.width =width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.div.style.backgroundImage="url("+this.src+")";
        this.div.style.backgroundSize=this.width+"px "+this.height+"px";

        //포지션
        this.div.style.position = "absolute";
        this.div.style.left = this.x+"px";
        this.div.style.top = this.y+"px";

        //크기 
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //컨테이너 부착
        this.container.appendChild(this.div);
    }

    move(){};
}