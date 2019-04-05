Camara.prototype = new General();
function Camara(ancho,alto)
{
  this.obj   = new THREE.PerspectiveCamera( 50, ancho / alto, 1, 3000 );



  this.setPosX = function(px){
      this.posX = px;
      this.obj.position.x = this.posX;
  }
  this.setPosY = function(py){
      this.posY = py;
      this.obj.position.y = this.posY;
  }
  this.setPosZ = function(pz){
      this.obj.position.z = this.posZ;
  }

  this.setPosition = function(px,py,pz){
      this.posX = px;
      this.posY = py;
      this.posX = pz;
      this.obj.position.set(this.posX,this.posY,this.posZ);

      this.obj.lookAt( 0, 200, 0 );
  }


  this.setPosition(1000, 500, 1000 );

}
