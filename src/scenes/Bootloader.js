class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.atlas('alhe', 'alhe_idle/alhe.png','alhe_idle/alhe_atlas.json');
        this.load.animation('alheAnim', 'alhe_idle/alhe_anim.json');

    }

    create() {
        this.alhe = this.add.sprite(200, 200, 'alhe', 0).setScale(.1);
        this.alhe.anims.play('alhe_idle');
        //OTRA FORMA DE EJECUTAR LA ANIMACIÓN
        //this.anims.play('tomato_camina', this.tomato_spacing);
    }

    update(time, delta) {
        
    }
}

export default Bootloader;